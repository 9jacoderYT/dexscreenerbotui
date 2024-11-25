const { newsMsg } = require("../lib/messages");

const handleNews = async (ctx) => {
  try {
    const groupDetails = ctx.session.groupDetails;

    if (!groupDetails) {
      await ctx.answerCbQuery(
        "⚠️ Group settings not found. Please use /start first."
      );
      return;
    }

    // Check if news_status exists and show appropriate menu
    await showNewsMenu(ctx, groupDetails.news_status);
  } catch (error) {
    console.error("Error in news action:", error);
    await ctx.answerCbQuery("❌ An error occurred");
  }
};

const showNewsMenu = async (ctx, currentStatus = false) => {
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: currentStatus
            ? "🔕 Switch News Alerts OFF"
            : "🔔 Switch News Alerts ON",
          callback_data: currentStatus ? "NEWS_TOGGLE_OFF" : "NEWS_TOGGLE_ON",
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
      `${newsMsg}\n\nCurrent Status: ${statusEmoji} ${statusText}`,
      {
        reply_markup: keyboard,
        parse_mode: "HTML",
      }
    )
    .catch(async (err) => {
      // If editing fails (e.g., message is too old), send new message
      await ctx.reply(
        `${newsMsg}\n\nCurrent Status: ${statusEmoji} ${statusText}`,
        {
          reply_markup: keyboard,
          parse_mode: "HTML",
        }
      );
    });
};

module.exports = { handleNews };
