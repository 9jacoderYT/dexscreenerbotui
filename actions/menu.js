const { showSettingsMenu } = require("../lib/keyboards");

const settingsMenu = async (ctx) => {
  try {
    const groupDetails = ctx.session.groupDetails;

    if (!groupDetails) {
      await ctx.answerCbQuery(
        "⚠️ Group settings not found. Please use /start first."
      );
      return;
    }

    // Show settings menu for the group with current settings
    await showSettingsMenu(ctx);
  } catch (error) {
    console.error("Error in payload handler:", error);
    await ctx.reply(
      "Sorry, something went wrong while processing your request."
    );
    return false;
  }
};

module.exports = { settingsMenu };
