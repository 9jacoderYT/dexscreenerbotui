const { toggleSignalStatus } = require("../database/firebase");

const handleSignalToggle = async (ctx) => {
  try {
    const groupId = ctx.session.groupId;
    const action = ctx.match[1];
    const newStatus = action === "ON";

    const result = await toggleSignalStatus(groupId, action);

    if (result.error) {
      await ctx.answerCbQuery(result.message);
      return;
    }

    // Update session data
    ctx.session.groupDetails = {
      ...ctx.session.groupDetails,
      signals_status: newStatus,
    };

    // Show quick confirmation
    await ctx.answerCbQuery(
      newStatus ? "✅ Signal alerts enabled" : "🔕 Signal alerts disabled"
    );
  } catch (error) {
    console.error("Error toggling signal status:", error);
    await ctx.answerCbQuery("❌ Failed to update settings");
  }
};

module.exports = handleSignalToggle;
