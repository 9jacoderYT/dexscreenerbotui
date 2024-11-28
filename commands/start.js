const { handlePrivateChat } = require("../handlers/privateHandler");
const { handleGroupChat } = require("../handlers/groupHandler");
const { handleChannelChat } = require("../handlers/channelHandler");

const handleStart = async (ctx) => {
  try {
    switch (ctx.chat.type) {
      case "private":
        await handlePrivateChat(ctx);
        break;
      case "group":
      case "supergroup":
        await handleGroupChat(ctx);
        break;
      case "channel":
        await handleChannelChat(ctx);
      default:
        console.log(`Unknown chat type: ${ctx.chat.type}`);
    }
  } catch (error) {
    console.error("Error in start command:", error);
  }
};

module.exports = { handleStart };
