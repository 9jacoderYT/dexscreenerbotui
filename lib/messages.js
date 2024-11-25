// messages.js
const introductions = [
  "🚀 I’m Astro Bullish Bot, your all-in-one crypto assistant! Ready for real-time signals, personalized alerts, and market insights? Let's crush it! 💹",
  "💥 Welcome aboard! I'm Astro Bullish Bot, here to provide you with the best crypto news, live prices, and advanced trading signals. Let’s make those profits! 📈",
  "📊 Astro Bullish Bot at your service—bringing you live crypto data, smart analysis, and real-time trading signals. Let’s take your portfolio to the moon! 🌙",
  "🔥 Get ready to level up your trading game! I’m Astro Bullish Bot, your guide to real-time signals, expert analysis, and exclusive educational content. Let’s go! 📈",
  "🌟 The crypto world is fast—don’t get left behind! Astro Bullish Bot brings you cutting-edge news, live market updates, and powerful trading insights. 🚀",
  "📉 Market data? Trading signals? Exclusive analysis? You name it, I’ve got it! Astro Bullish Bot is here to help you trade smarter and win bigger! 💪",
  "🔔 Need alerts, signals, and in-depth crypto analysis? Look no further—Astro Bullish Bot is your go-to assistant for all things crypto! Let’s get started! 🚀",
  "💡 Astro Bullish Bot is all about making crypto trading easy and powerful. With real-time signals and expert tutorials, I’ll guide you every step of the way! 📈",
  "🎯 Ready to dominate the crypto market? I’m Astro Bullish Bot, your assistant for live updates, AI-driven predictions, and real-time trading signals! ⚡",
  "🧠 Need personalized crypto alerts or advanced analysis? I’m Astro Bullish Bot—your intelligent assistant, guiding you with precision through the crypto universe! 🌌",
  "⚡Future crypto mogul! Astro Bullish Bot is here to give you real-time trading signals, powerful analysis tools, and everything you need to make informed moves! 📈",
  "🚀 Whether you’re a newbie or a seasoned trader, I’m Astro Bullish Bot—bringing you up-to-the-minute market data, alerts, and advanced trading tools! 📉",
  "💥 Think crypto trading is hard? Think again! With Astro Bullish Bot’s real-time signals, technical analysis, and personalized alerts, it’s easy! 📊",
  "🎓 Learn the ropes and make smarter trades with Astro Bullish Bot! From real-time signals to expert tutorials, I’ve got everything you need to succeed! 📈",
  "📉 Ready for next-level crypto analysis and trading? I’m Astro Bullish Bot, delivering real-time signals, market data, and educational content to help you trade like a pro! 💹",
  "🛠️ Your crypto journey starts here! Astro Bullish Bot is packed with tools—live prices, market analysis, personalized alerts, and more. Let’s go make some profits! 💰",
  "💸 Let’s break down the markets and find your next big move! I’m Astro Bullish Bot, with real-time signals, charting tools, and exclusive tutorials for premium users! 📉",
  "⚡ Want to trade like a pro? I’ve got real-time signals, advanced indicators, and a whole lot more to help you win big in the crypto markets! Let’s dive in! 🚀",
];

const greetings = [
  "Hi",
  "Hello",
  "Hey",
  "Welcome",
  "Greetings",
  "Nice to meet you",
  "It's great to see you",
  "Thanks for reaching out",
  "Howdy!",
  "Ahoy there!",
  "Yo!",
  "Sup, fam?",
  "Hey, bestie!",
  "What's good?",
  "Hey there, superstar!",
  "Wassup, legend?",
  "Hello, world!", // Coding reference
  "Hey there, MVP!",
  "You’re looking snatched today!", // Gen Z slang
  "What’s popping?",
  "Hey, rockstar!",
  "Welcome to the party!",
  "Hola, amigo/a!",
  "Bonjour, mon ami!",
  "Yas queen, hello!",
  "Hello, Jedi Master!", // Star Wars
  "Hey, Player One!", // Gamer reference
  "Ready to rumble?",
  "Welcome, hero of time!", // Zelda reference
  "A wild visitor appears!", // Pokémon reference
  "Hey, true believer!", // Marvel reference
  "Greetings, wizard!", // Fantasy RPGs
  "Live long and prosper!", // Star Trek
  "Hello from the other side!", // Adele reference
  "Wubba lubba dub-dub!", // Rick and Morty
  "Hey, space cowboy!", // Cowboy Bebop
  "You’re breathtaking!", // Keanu Reeves at E3
  "Hey, Potterhead!", // Harry Potter fans
  "Welcome to the Upside Down!", // Stranger Things
  "What’s crackalackin’?",
  "Hello, sunshine!",
  "May the Force be with you!", // Star Wars
  "Waka waka, hi!", // Shakira or Fozzie Bear reference
  "Hey, big brain!",
  "Hello, meme lord/lady!",
];

const settingsMessages = [
  "🔧 Time to tweak your settings! Hit below to make the magic happen in a private chat. 🚀",
  "⚙️ Let’s get you all set up! Click below to unleash your crypto powers in private. 💥",
  "🎮 Ready to level up? Configure your settings in private chat! Press below to start the quest. 🕹️",
  "👾 It’s customization time! Hit below and let’s personalize your Astro Bullish Bot experience. 🌟",
  "🔌 Plug into your settings! Click below to make Astro Bullish Bot work just for you. ⚡",
  "🔧 Customization alert! Click below to fine-tune your bot settings like a true crypto pro. 💸",
  "🛠️ It’s settings time! Click below to power up your private chat with Astro Bullish Bot. 🚀",
  "🎬 Action time! Click below to direct your own Astro Bullish Bot feature film in private chat. 🎥",
  "💡 Ready to activate your crypto superpowers? Click below to customize in private chat! ⚡",
  "💬 Let’s talk settings! Click below to fine-tune everything like a crypto boss in private. 👑",
  "⚙️ Make it yours! Click below to unlock full control in private chat. 🚀",
  "📲 The power is in your hands! Configure your bot settings by clicking below. 🔧",
  "🛠️ Set your preferences and let’s get this crypto journey started! Click below to configure in private. 🌍",
  "🚨 Settings mode activated! Click below and customize Astro Bullish Bot for the best crypto experience! 🔥",
  "💥 It’s all about customization! Hit below and tweak your settings in a private chat. 🌟",
];

const privateMsg = `
To read full features list, use the /features@astro_bullish_bot command

💡 Get Started: Add me to your group and type /start@astro_update_bot
`;

const featuresMsg = `
  Free Features:
🚀 Trending Solana tokens analysis and market data
📈 Latest crypto news & updates  
💹 Live prices and market details for BTC, ETH, BNB, and more  
📊 Daily analysis with charts and insights  
🛒 Buy/Sell/HOLD signals backed by 1-month of historical data  

  Premium Perks:
🚀 Real-time signals for any crypto  
🔔 Personalized alerts & market updates  
📉 Advanced indicators (RSI, MACD, etc.)  
📊 Interactive charts with deep analysis  
🎓 Exclusive trading tutorials & tips  

  Coming Soon: 
🤖 AI-powered price predictions  
🔗 Trade directly on Binance/Bybit via the bot
🔗 Automate your strategy and let the bot trade for you!  
`;

const groupMsg = `

I’m now part of your group, ready to provide real-time crypto signals, live market updates, and personalized alerts! 📈

⚡ Get Started: To set up your personalized experience, use **/settings@astro_bullish_bot** and let me know your preferences! 🛠️

🎯 Quick Tip: Don't forget to check out the Astro Bullish Signals Channel for the latest crypto news and expert analysis, live as it happens! [Join Now!](https://t.me/astro_bullish_signals)

Let’s make some gains together! 💸
`;

const channelMsg = `


I’m now part of your group, ready to provide real-time crypto signals, live market updates, and personalized alerts! 📈

⚡ Get Started: To set up your personalized experience, use /settings@astro_bullish_bot and let me know your preferences! 🛠️

🎯 Quick Tip: Don't forget to check out the Astro Bullish Signals Channel for the latest crypto news and expert analysis, live as it happens! [Join Now!](https://t.me/astro_bullish_signals)

Let’s make some gains together! 💸

`;

const newsMsg = `
Our bot gathers news from top crypto platforms via APIs, RSS feeds, Twitter posts, and web scraping. 📰✨

🔍 Filter News with Tags  
Easily customize your news feed by setting filters that allow only news containing specific tags.  

For example: /addnewsfilters btc, eth, bnb, bullish, sell

1️⃣ Tags must be separated by commas.  
2️⃣ A maximum of 5 tags can be added.  
⚠️ Note: Once filters are set, the rate of news updates may decrease due to the applied restrictions.  

Stay informed and in control of your news! 🚀📈  
`;

const signalsMsg = `
🚨 *Disclaimer:* All analyses provided are strictly *ANALYSES*—**not trading advice**. 📊

🔍 How Our Bot Works:  
Our bot utilizes:  
- 📅 3 months of historical data
- 📰 News feeds from APIs, RSS feeds, Twitter posts, and web scraping  

💡 Crypto-Specific Algorithms Provide
1️⃣ Fundamental analysis* / Market sentiment  
2️⃣ Technical analysis* including:  
   - 📈 RSI  
   - 📊 EMA20  
   - 📉 EMA50  

💎 Supported Tokens  
We provide signals for top tokens:  
BNB | ETH | BTC | SOL | XRP  

💹 Signals Generated  
- 🔼 BUY  
- 🤝 HOLD  
- 🔽 SELL  

✨ Premium Features 
Exclusive tools for premium users include:  
- 🎯 Entry points  
- 🏁 Exit points  
- 📜 Add more tokens to your watchlist  

🔍 Filter Analysis with Tags 
Easily customize your token analysis by setting filters that allow only analysis for specific tags.  

For example: /addtokenfilters btc, eth, bnb, xrp, sol

Upgrade to premium and take your trading to the next level! 🚀  
`;

const solanaMsg = `
Astro Bullish bot provides a comprehensive analysis of trending Solana tokens, equipping users with detailed insights into the Solana ecosystem. Our bot focuses on delivering:  

1️⃣ Technical Analysis
   - Key indicators such as RSI (Relative Strength Index) to gauge market momentum.  
   - EMA20 and EMA50 (Exponential Moving Averages) to track short-term and long-term price trends.  
   - Support and resistance levels to identify critical price points.  

2️⃣ Fundamental Analysis 
   - Market sentiment derived from news articles, social media trends, and other data sources.  
   - Assessment of token utility, adoption, and overall relevance in the ecosystem.  

3️⃣ Contract Analysis 
   - Verification of smart contract authenticity and safety to help users avoid potential scams or vulnerabilities.  

4️⃣ Market Metrics
   - 💰 *Market Cap*: The total value of a token, providing insights into its market position.  
   - 🔄 *Volume*: The amount traded within a specific timeframe to indicate liquidity and trading activity.  
   - 🌐 *Other Market Prices*: Comparison of token prices across different markets and exchanges for arbitrage opportunities.  

Astro Bullish bot simplifies Solana token tracking, making it easier for you to stay informed and make smarter decisions. 🚀  
`;

const premiumMsg = `
   💎 Premium Perks
- 🚀 Faster updates
- 📈 Real-time crypto signals** for any asset
- 🔍 Filtered news** based on specific tags
- 📉 Advanced indicators** (e.g., RSI, MACD)
- 📊 Interactive charts** with deep insights
- 📜 Analysis based on **3 months of historical data

 ⏳ Coming Soon
🤖 Machine Learning (TensorFlow)-based price predictions  
🔗 Trade with Astro_Trading_Bot
🔗 Automate your strategy** and let the bot trade for you!  
🪙 Buy Solana tokens directly 

🚪 *Upgrade now for a superior trading experience!*
`;

module.exports = {
  privateMsg,
  groupMsg,
  channelMsg,
  greetings,
  settingsMessages,
  featuresMsg,
  introductions,
  newsMsg,
  signalsMsg,
  solanaMsg,
  premiumMsg,
};
