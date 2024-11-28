const mainKeyboard = (username) => ({
  inline_keyboard: [
    [
      {
        text: "➕ Add to Group/Channel",
        url: `https://t.me/${username}?startgroup=true`,
      },
    ],
    [
      {
        text: "🚀 Join Dexscreener Alert",
        url: "https://t.me/Dexscreener_Listing_Alert",
      },
    ],
  ],
});

const settingsKeyboard = (username, chatId) => ({
  inline_keyboard: [
    [
      {
        text: "⚙️ Open Settings",
        url: `https://t.me/${username}?start=settings_${chatId}`,
      },
    ],
  ],
});

const showSettingsMenu = async (ctx) => {
  const groupDetails = ctx.session.groupDetails;

  // Create status indicators based on group settings
  const alertStatus = groupDetails.news_status ? "✅" : "❌";

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: `🔔 Alerts`,
          callback_data: `ALERTS_MENU`,
        },
      ],
    ],
  };

  await ctx.reply(
    `Settings for: ${ctx.session.chatTitle}\n\nCurrent Configuration:\n` +
      `• News Alerts: ${newsStatus}\n` +
      `• Trading Signals & Analysis: ${signalsStatus}\n` +
      `• Solana Trending: ${trendingStatus}\n\n` +
      `Select an option to toggle:`,
    {
      reply_markup: keyboard,
    }
  );
};

module.exports = { mainKeyboard, settingsKeyboard, showSettingsMenu };
