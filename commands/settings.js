const { settingsMessages } = require("../lib/messages");
const { settingsKeyboard } = require("../lib/keyboards");

const handleSettings = async (ctx) => {
  try {
    const chatType = ctx.chat.type;
    const chatId = ctx.chat.id;

    if (chatType === "private") {
      await ctx.reply(
        "⚠️ Please use /settings command in a group or channel where I am added."
      );
    } else if (
      chatType === "group" ||
      chatType === "supergroup" ||
      chatType === "channel"
    ) {
      const getSettingMessage =
        settingsMessages[Math.floor(Math.random() * settingsMessages.length)];

      await ctx.reply(getSettingMessage, {
        reply_markup: settingsKeyboard(ctx.botInfo.username, chatId),
      });
    }
  } catch (error) {
    console.error("Error in settings command:", error);
    await ctx.reply("Sorry, something went wrong.");
  }
};

module.exports = { handleSettings };
