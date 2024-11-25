const { toggleNewsStatus } = require("../database/firebase");

const handleNewsToggle = async (ctx) => {
  try {
    const groupId = ctx.session.groupId;
    const action = ctx.match[1]; // NEWS_ON or NEWS_OFF
    const newStatus = action === "ON";

    const result = await toggleNewsStatus(groupId, action);

    if (result.error) {
      await ctx.answerCbQuery(result.message);
      return;
    }

    // Update session data
    ctx.session.groupDetails = {
      ...ctx.session.groupDetails,
      news_status: newStatus,
    };

    // Show quick confirmation
    await ctx.answerCbQuery(
      newStatus ? "✅ News alerts enabled" : "🔕 News alerts disabled"
    );
  } catch (error) {
    console.error("Error toggling news status:", error);
    await ctx.answerCbQuery("❌ Failed to update settings");
  }
};

module.exports = handleNewsToggle;
