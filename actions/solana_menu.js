const { solanaMsg } = require("../lib/messages");

const handleSolanaMenu = async (ctx) => {
  try {
    const groupDetails = ctx.session.groupDetails;

    if (!groupDetails) {
      await ctx.answerCbQuery(
        "⚠️ Group settings not found. Please use /start first."
      );
      return;
    }

    // Check if news_status exists and show appropriate menu
    await showSolanaMenu(ctx, groupDetails.trending_status);
  } catch (error) {
    console.error("Error in news action:", error);
    await ctx.answerCbQuery("❌ An error occurred");
  }
};

const showSolanaMenu = async (ctx, currentStatus = false) => {
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: currentStatus
            ? "🔕 Switch Trending Alerts OFF"
            : "🔔 Switch Trending Alerts ON",
          callback_data: currentStatus
            ? "SOLANA_TOGGLE_OFF"
            : "SOLANA_TOGGLE_ON",
        },
      ],
      [
        {
          text: "« Back to Settings",
          callback_data: `SETTINGS_MENU`,
        },
      ],
    ],
  };

  const statusEmoji = currentStatus ? "✅" : "❌";
  const statusText = currentStatus ? "ENABLED" : "DISABLED";

  await ctx
    .editMessageText(
      `${solanaMsg}\n\nCurrent Status: ${statusEmoji} ${statusText}`,
      {
        reply_markup: keyboard,
        parse_mode: "HTML",
      }
    )
    .catch(async (err) => {
      // If editing fails (e.g., message is too old), send new message
      await ctx.reply(
        `${solanaMsg}\n\nCurrent Status: ${statusEmoji} ${statusText}`,
        {
          reply_markup: keyboard,
          parse_mode: "HTML",
        }
      );
    });
};

module.exports = { handleSolanaMenu };
