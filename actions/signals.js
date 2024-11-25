const { signalsMsg } = require("../lib/messages");

const handleSignals = async (ctx) => {
  try {
    const groupDetails = ctx.session.groupDetails;

    if (!groupDetails) {
      await ctx.answerCbQuery(
        "⚠️ Group settings not found. Please use /start first."
      );
      return;
    }

    // Check if news_status exists and show appropriate menu
    await showSignalsMenu(ctx, groupDetails.signals_status);
  } catch (error) {
    console.error("Error in news action:", error);
    await ctx.answerCbQuery("❌ An error occurred");
  }
};

const showSignalsMenu = async (ctx, currentStatus = false) => {
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: currentStatus
            ? "🔕 Switch Signal Alerts OFF"
            : "🔔 Switch Signal Alerts ON",
          callback_data: currentStatus
            ? "SIGNALS_TOGGLE_OFF"
            : "SIGNALS_TOGGLE_ON",
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
      `${signalsMsg}\n\nCurrent Status: ${statusEmoji} ${statusText}`,
      {
        reply_markup: keyboard,
        parse_mode: "HTML",
      }
    )
    .catch(async (err) => {
      // If editing fails (e.g., message is too old), send new message
      await ctx.reply(
        `${signalsMsg}\n\nCurrent Status: ${statusEmoji} ${statusText}`,
        {
          reply_markup: keyboard,
          parse_mode: "HTML",
        }
      );
    });
};

module.exports = { handleSignals };
