const { Context } = require("telegraf");
const { channelPost } = require("telegraf/filters");
const { MessageEntity } = require("telegraf/types");

const channelMode = () => (ctx, next) => {
  if (!ctx.has(channelPost("text"))) return next();

  if (ctx.channelPost.text.startsWith("/")) {
    const entity = {
      type: "bot_command",
      offset: 0,
      length: ctx.channelPost.text.split(" ")[0].length,
    };

    (ctx.channelPost.entities ??= []).unshift(entity);
  }

  ctx.update.message = ctx.channelPost;
  return next();
};

module.exports = {
  channelMode,
};
