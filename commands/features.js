const { featuresMsg } = require("../lib/messages");

const handleFeatures = async (ctx) => {
  try {
    await ctx.reply(featuresMsg);
  } catch (error) {
    console.error("Error in settings command:", error);
    await ctx.reply("Sorry, something went wrong.");
  }
};

module.exports = { handleFeatures };
