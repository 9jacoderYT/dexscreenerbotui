require("dotenv").config();
const { Telegraf, session } = require("telegraf");
const express = require("express");
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

// bot.command("settings", async (ctx) => {
//   // Settings command should only work for admins in groups

//   switch (ctx.chat.type) {
//     case "private":
//       return handleSettings(ctx);

//     case "group":
//     case "supergroup":
//       const member = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
//       if (["creator", "administrator"].includes(member.status)) {
//         return handleSettings(ctx);
//       }
//       break;

//     case "channel":
//       return handleSettings(ctx);
//     default:
//       console.log(`Unknown chat type: ${ctx.chat.type}`);
//       break;
//   }
// });

// bot.command("features", handleFeatures);

/*
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
*/

 bot.launch();

// const PORT = process.env.PORT || 3000;

// bot.launch({
//   webhook: {
//     domain: "https://dexscreenerbotui.vercel.app", // This should be your Vercel domain
//     port: PORT,
//   },
// });
