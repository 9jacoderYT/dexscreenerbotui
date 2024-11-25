// Rate limiting maps
const commandLimits = new Map();
const groupCommandCache = new Map();

// Constants
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const MAX_COMMANDS_PER_MINUTE = 3;

const handleGroupCommand = async (ctx) => {
  try {
    const groupId = ctx.chat.id.toString();
    const userId = ctx.from.id.toString();
    const command = ctx.message.text;
    const now = Date.now();

    // Rate limiting for everyone
    const limitKey = `${groupId}:${userId}`;
    const userLimit = commandLimits.get(limitKey) || {
      count: 0,
      timestamp: now,
      warnings: 0, // Track number of times user has hit rate limit
    };

    // Reset count if time window passed
    if (now - userLimit.timestamp > RATE_LIMIT_DURATION) {
      userLimit.count = 0;
      userLimit.timestamp = now;
    }

    // Increment and check rate limit
    userLimit.count++;

    // If exceeding rate limit
    if (userLimit.count > MAX_COMMANDS_PER_MINUTE) {
      userLimit.warnings++;

      // Only send warning message on first violation within the time window
      if (userLimit.count === MAX_COMMANDS_PER_MINUTE + 1) {
        // Silent for regular users, warning for admins
        const member = await ctx.telegram.getChatMember(groupId, userId);
        if (["creator", "administrator"].includes(member.status)) {
          await ctx
            .reply(
              "⚠️ Please avoid spamming commands. " +
                `Wait ${Math.ceil(RATE_LIMIT_DURATION / 1000)} seconds.`
            )
            .catch((err) => console.error("Error sending warning:", err));
        }
      }

      commandLimits.set(limitKey, userLimit);
      return false;
    }

    commandLimits.set(limitKey, userLimit);

    // Cache check for repeated commands in the group
    const cacheKey = `${groupId}:${command}`;
    const cachedCommand = groupCommandCache.get(cacheKey);

    if (cachedCommand && now - cachedCommand.timestamp < CACHE_DURATION) {
      // If it's a repeated command, check if we should notify
      if (!cachedCommand.notified) {
        const member = await ctx.telegram.getChatMember(groupId, userId);
        if (["creator", "administrator"].includes(member.status)) {
          await ctx
            .reply(
              "This command was recently used. Please wait a few minutes before using it again."
            )
            .catch((err) => console.error("Error sending cache warning:", err));

          // Update cache to show we've notified
          cachedCommand.notified = true;
          groupCommandCache.set(cacheKey, cachedCommand);
        }
      }
      return false;
    }

    // Update command cache
    groupCommandCache.set(cacheKey, {
      timestamp: now,
      notified: false,
    });

    // Cleanup old entries periodically (10% chance)
    if (Math.random() < 0.1) {
      cleanup();
    }

    return true;
  } catch (error) {
    console.error("Error in spam prevention:", error);
    return false;
  }
};

// Cleanup function
const cleanup = () => {
  const now = Date.now();

  // Cleanup rate limits
  for (const [key, value] of commandLimits.entries()) {
    if (now - value.timestamp > RATE_LIMIT_DURATION) {
      commandLimits.delete(key);
    }
  }

  // Cleanup command cache
  for (const [key, value] of groupCommandCache.entries()) {
    if (now - value.timestamp > CACHE_DURATION) {
      groupCommandCache.delete(key);
    }
  }
};

// Helper to check remaining cooldown time
const getRemainingCooldown = (limitKey) => {
  const userLimit = commandLimits.get(limitKey);
  if (!userLimit) return 0;

  const remaining = RATE_LIMIT_DURATION - (Date.now() - userLimit.timestamp);
  return remaining > 0 ? remaining : 0;
};

module.exports = {
  handleGroupCommand,
  getRemainingCooldown,
  RATE_LIMIT_DURATION,
  MAX_COMMANDS_PER_MINUTE,
};
