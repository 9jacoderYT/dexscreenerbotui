const { getGroupDetails } = require("../database/firebase");
const { showSettingsMenu } = require("../lib/keyboards");

const validateAndHandlePayload = async (ctx) => {
  try {
    const payload = ctx.payload;
    if (!payload?.startsWith("settings_")) {
      return false;
    }

    // Extract group ID and validate
    const groupId = payload.split("settings_")[1];

    // Verify group exists and bot is member
    try {
      const chat = await ctx.telegram.getChat(groupId);

      if (!chat) {
        await ctx.reply("⚠️ Could not find the specified group.");
        return false;
      }

      // Fetch group details from Firebase
      const groupDetails = await getGroupDetails(groupId);

      if (groupDetails.error) {
        await ctx.reply(
          "⚠️ This group does not have an active account with Astro Bullish Bot. Please add the bot to your group first."
        );
        return false;
      }

      // Store group details and chat info in session
      ctx.session.groupDetails = groupDetails.data;
      ctx.session.groupId = groupId;
      ctx.session.chatTitle = chat.title;

      // Check if user is admin
      const member = await ctx.telegram.getChatMember(groupId, ctx.from.id);

      if (!["creator", "administrator"].includes(member.status)) {
        await ctx.reply("⚠️ Only administrators can access group settings.");
        return false;
      }

      // Show settings menu for the group with current settings
      await showSettingsMenu(ctx);
      return true;
    } catch (error) {
      await ctx.reply(
        "⚠️ Unable to verify group information. Please make sure I am still in the group."
      );
      console.log(error);
      return false;
    }
  } catch (error) {
    console.error("Error in payload handler:", error);
    await ctx.reply(
      "Sorry, something went wrong while processing your request."
    );
    return false;
  }
};

module.exports = { validateAndHandlePayload };
