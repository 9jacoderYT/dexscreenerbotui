const { privateMsg, greetings, introductions } = require("../lib/messages");
const { mainKeyboard } = require("../lib/keyboards");
const { validateAndHandlePayload } = require("./payloadHandler");

const handlePrivateChat = async (ctx) => {
  try {
    const payload = ctx.payload;

    // If there's a payload, handle it
    if (payload) {
      const handled = await validateAndHandlePayload(ctx);
      if (handled) return;
      // If payload handling failed, continue with normal start message
    }

    // Regular start message logic
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];

    const randomIntroduction =
      introductions[Math.floor(Math.random() * introductions.length)];

    const userIdentifier =
      ctx.from.first_name ||
      (ctx.from.username && `@${ctx.from.username}`) ||
      "there";

    await ctx.reply(
      `${randomGreeting} ${userIdentifier}! \n\n ${randomIntroduction} \n ${privateMsg}`,
      {
        reply_markup: mainKeyboard(ctx.botInfo.username),
      }
    );
  } catch (error) {
    console.error("Error in private chat handler:", error);
    await ctx.reply("Sorry, something went wrong.");
  }
};

module.exports = { handlePrivateChat };
