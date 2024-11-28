require("dotenv").config();
const { Telegraf, session } = require("telegraf");
const express = require("express");
const { channelMode } = require("./middleware/channelMode");
const { handleStart } = require("./commands/start");

// Import spam prevention middleware
const { handleGroupCommand } = require("./middleware/spamPrevention");

const app = express();
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
  channelMode();

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
  switch (ctx.chat.type) {
    case "private":
      return handleStart(ctx);

    case "group":
    case "supergroup":
      const member = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
      if (["creator", "administrator"].includes(member.status)) {
        return handleStart(ctx);
      }
      break;

    case "channel":
      return handleStart(ctx);

    default:
      console.log(`Unknown chat type: ${ctx.chat.type}`);
      break;
  }
});



 bot.launch();

// const PORT = process.env.PORT || 3000;

// bot.launch({
//   webhook: {
//     domain: "https://dexscreenerbotui.vercel.app", // This should be your Vercel domain
//     port: PORT,
//   },
// });
