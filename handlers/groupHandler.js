const { addGroup } = require("../database/firebase");
const { groupMsg, greetings } = require("../lib/messages");

const handleGroupChat = async (ctx) => {
  try {
    // Get the group ID from the chat
    const groupId = ctx.chat.id.toString();
    const creatorId = ctx.update.message.from.id;

    // Check if the bot is an admin in the group
    const botMember = await ctx.telegram.getChatMember(groupId, ctx.botInfo.id);

    if (
      !botMember ||
      !["administrator", "creator"].includes(botMember.status)
    ) {
      await ctx.reply(
        "❌ Please make me an admin of this group to use my features!"
      );
      return;
    }

    // Add the group to the database
    const result = await addGroup(groupId, creatorId);

    if (result.error) {
      // If the error message indicates the bot is already added, we can continue
      if (result.message === "Bot added in group already") {
        const randomGreeting =
          greetings[Math.floor(Math.random() * greetings.length)];
        await ctx.reply(`${randomGreeting} ${groupMsg}`);
        return;
      }

      // For other errors, send an error message
      await ctx.reply(
        "❌ There was an error setting up the bot in this group. Please try again later or contact support."
      );
      console.error("Error in handleGroupChat:", result.message);
      return;
    }

    // If everything is successful, send the welcome message
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    await ctx.reply(`${randomGreeting} ${groupMsg}`);
  } catch (error) {
    console.error("Error in handleGroupChat:", error);
    try {
      await ctx.reply(
        "❌ An unexpected error occurred. Please try again later or contact support."
      );
    } catch (replyError) {
      console.error("Error sending error message:", replyError);
    }
  }
};

module.exports = { handleGroupChat };
