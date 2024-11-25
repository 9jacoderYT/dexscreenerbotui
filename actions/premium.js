const { newsMsg, premiumMsg } = require("../lib/messages");

const handlePremium = async (ctx) => {
  try {
    const groupDetails = ctx.session.groupDetails;

    if (!groupDetails) {
      await ctx.answerCbQuery(
        "⚠️ Group settings not found. Please use /start first."
      );
      return;
    }

    // Check if news_status exists and show appropriate menu
    await showPremiumMenu(ctx, groupDetails.premium_status);
  } catch (error) {
    console.error("Error in news action:", error);
    await ctx.answerCbQuery("❌ An error occurred");
  }
};

const showPremiumMenu = async (ctx, currentStatus = false) => {
  const keyboard = {
    inline_keyboard: currentStatus
      ? [[{ text: "🔙 « Back to Settings", callback_data: `SETTINGS_MENU` }]]
      : [
          [
            { text: "🗓️ 1 Month - 0.03 SOL", callback_data: `PAYMENT_5` },
            { text: "🗓️ 3 Months - 0.06 SOL", callback_data: `PAYMENT_10` },
          ],
          [{ text: "♾️ Lifetime - 0.2 SOL", callback_data: `PAYMENT_50` }],
          [{ text: "🔙 « Back to Settings", callback_data: `SETTINGS_MENU` }],
        ],
  };

  const statusEmoji = currentStatus ? "✅" : "❌";
  const statusText = currentStatus ? "Active" : "Inactive";

  const messageText = `${premiumMsg}\n\nCurrent Status: ${statusEmoji} ${statusText}`;
  const options = { reply_markup: keyboard, parse_mode: "HTML" };

  try {
    await ctx.editMessageText(messageText, options);
  } catch (err) {
    await ctx.reply(messageText, options);
  }
};

module.exports = { handlePremium };
