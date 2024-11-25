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
        text: "🆘 AstroBB Live Channel",
        url: "https://t.me/astro_bullish_signals",
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
  const newsStatus = groupDetails.news_status ? "✅" : "❌";
  const signalsStatus = groupDetails.signals_status ? "✅" : "❌";
  const trendingStatus = groupDetails.trending_status ? "✅" : "❌";

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: `🔔 News Alerts`,
          callback_data: `NEWS_MENU`,
        },
      ],
      [
        {
          text: `📡 Trading Signals & Analysis`,
          callback_data: `SIGNALS_MENU`,
        },
      ],
      [
        {
          text: `🚀 Trending Solana Tokens`,
          callback_data: `SOLANA_MENU`,
        },
      ],
      [
        {
          text: "**Premium**",
          callback_data: `PREMIUM`,
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
