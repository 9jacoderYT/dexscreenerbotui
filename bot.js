require("dotenv").config();
const { Telegraf, session } = require("telegraf");
const { channelMode } = require("./middleware/channelMode");
const { handleStart } = require("./commands/start");
const { handleSettings } = require("./commands/settings");
const { handleNews } = require("./actions");

// Import spam prevention middleware
const { handleGroupCommand } = require("./middleware/spamPrevention");
const handleNewsToggle = require("./toggle/newsActionToggle");
const { settingsMenu } = require("./actions/menu");
const { handleSignals } = require("./actions/signals");
const handleSignalToggle = require("./toggle/signalActionToggle");
const { handleFeatures } = require("./commands/features");
const { handleSolanaMenu } = require("./actions/solana_menu");
const handleTrendingToggle = require("./toggle/trendingActionToggle");
const { handlePremium } = require("./actions/premium");
const { handlePayment } = require("./handlers/paymentHandler");

const bot = new Telegraf(process.env.BOT_TOKEN);

// Initialize session with default state
bot.use(
  session({
    defaultSession: () => ({
      groupId: null,
      chatTitle: null,
      groupDetails: null,
      lastCommandTime: null, // For rate limiting
    }),
  })
);

// Anti-spam middleware
bot.use(async (ctx, next) => {
  // Skip for non-group chats and non-command messages
  if (ctx.chat?.type === "private" || !ctx.message?.text?.startsWith("/")) {
    return next();
  }

  // Apply rate limiting to everyone
  const shouldProcess = await handleGroupCommand(ctx);
  if (!shouldProcess) {
    return; // Silently ignore
  }

  return next();
});

// Enable channel posting
bot.use(channelMode());

// Commands
bot.command("start", async (ctx) => {
  if (ctx.chat.type === "private") {
    // Handle private chat normally
    return handleStart(ctx);
  }
  // For groups, only allow admins to use /start
  const member = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
  if (["creator", "administrator"].includes(member.status)) {
    return handleStart(ctx);
  }
});

bot.command("settings", async (ctx) => {
  // Settings command should only work for admins in groups
  if (ctx.chat.type === "private") {
    return handleSettings(ctx);
  }

  const member = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
  if (["creator", "administrator"].includes(member.status)) {
    return handleSettings(ctx);
  }
});

bot.command("features", handleFeatures);

bot.action(/SETTINGS_MENU/, settingsMenu);

// Handle actions news
bot.action(/NEWS_MENU/, handleNews);
bot.action(/^NEWS_TOGGLE_(ON|OFF)$/, handleNewsToggle);

// signals
bot.action(/SIGNALS_MENU/, handleSignals);
bot.action(/^SIGNALS_TOGGLE_(ON|OFF)$/, handleSignalToggle);

//trending
bot.action(/SOLANA_MENU/, handleSolanaMenu);
bot.action(/^SOLANA_TOGGLE_(ON|OFF)$/, handleTrendingToggle);

//Premium
bot.action(/PREMIUM/, handlePremium);
bot.action(/^PAYMENT_(\d+)$/, async (ctx) => {
  const amount = ctx.match[1];

  await handlePayment(ctx, parseInt(amount));
});

bot.launch();
