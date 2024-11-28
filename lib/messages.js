const botName = `@dexscreener_listing_bot`;
const channellink = `https://t.me/Dexscreener_Listing_Alert`;

// messages.js
const introductions = [
  "🚀 I'm Dexscreener Listing Bot! Stay ahead with real-time updates on verified trending tokens across all chains from Dexscreener, complete with market cap, liquidity, and 24h volume. Each token comes with verified website, Telegram, and Twitter links! Let's dive in! 💹",

  "🔥 Welcome to Dexscreener Listing Bot! Your guide to verified trending tokens across all blockchain networks on Dexscreener. Get instant access to market cap, liquidity, 24h volume, and verified social links including Telegram, Twitter, and official websites! 📈",

  "📊 Dexscreener Listing Bot at your service! Tracking the hottest verified tokens across every chain on Dexscreener? I've got you covered with liquidity, market cap, 24h volume, and complete social profiles. Let's find your next big trade! 🚀",

  "🌟 Level up your trading! I'm Dexscreener Listing Bot, your assistant for discovering verified trending tokens across all chains with detailed market insights and verified social links including Telegram, Twitter, and websites. Let's make smart moves! 📉",

  "💥 Don't miss out! I'm Dexscreener Listing Bot, here to highlight top verified trending tokens across all chains on Dexscreener, along with key data and complete social profiles. Stay informed and stay ahead! 💪",

  "📉 Need insights on trending tokens? I'm Dexscreener Listing Bot—bringing you verified tokens from all chains with real-time market cap, liquidity, 24h volume, plus direct links to each project's verified website, Telegram, and Twitter! 🌌",

  "💡 Dexscreener Listing Bot is here! Tracking verified trending tokens across all networks on Dexscreener with market cap, liquidity, and 24h volume data. Connect through verified social links including Telegram, Twitter, and websites! 🚀",

  "🎯 Ready to discover hidden gems? I'm Dexscreener Listing Bot, delivering verified trending tokens from all chains, with complete social profiles and market data. Trade smarter with verified projects! ⚡",

  "🧠 Stay informed with Dexscreener Listing Bot! Get instant access to verified trending tokens across all chains, with complete market metrics and verified social links to stay connected with legitimate projects! 🌌",

  "💸 Looking for the next big opportunity? I'm Dexscreener Listing Bot, tracking verified trending tokens across all chains with detailed metrics and complete social profiles including Telegram, Twitter, and websites! 📈",

  "🛠️ Your trading journey starts here! With Dexscreener Listing Bot, get real-time data on verified trending tokens from all chains—including liquidity, market cap, 24h volume, and verified social links! 💰",

  "💬 Want to trade like a pro? I'm Dexscreener Listing Bot, providing insights on verified trending tokens from all chains with complete market data and verified social profiles. Let's dive in! 🚀",

  "🚀 Whether you're a beginner or a pro, I'm Dexscreener Listing Bot—bringing you verified trending tokens from all chains, with complete social profiles and market metrics. Stay ahead! 📉",

  "💥 Think tracking tokens is hard? Think again! With Dexscreener Listing Bot, get real-time updates on verified trending tokens across all chains, plus complete social profiles to verify legitimacy! 📊",

  "🎓 Learn and grow with Dexscreener Listing Bot! Explore verified trending tokens across all chains, check complete market metrics, and connect through verified Telegram, Twitter, and websites! 📈",

  "⚡ Want powerful insights? I've got verified trending tokens from all chains, complete with market data and verified social profiles including Telegram, Twitter, and websites! 🚀",

  "🚀 I’m Dexscreener Listing Bot! Bringing you trending tokens across all chains, verified with complete social links—Telegram, website, and Twitter. Ready to explore? 💹",
  "🔥 Welcome to Dexscreener Listing Bot! Stay updated with top trending tokens from every chain. Verified projects only, with full social details included! 📈",
  "📊 Dexscreener Listing Bot at your service! Discover trending tokens across all blockchain networks, with verified social links for deeper insights. Let’s dive in! 🚀",
  "🌟 Explore the crypto universe with Dexscreener Listing Bot! Trending tokens on every chain are just a click away—verified with all their social links. 🌌",
  "💥 Don’t miss out! I’m Dexscreener Listing Bot, delivering verified tokens trending across all chains, complete with Telegram, website, and Twitter info. 💪",
  "📉 Want the full picture? Dexscreener Listing Bot provides trending tokens across all blockchain networks, verified with their essential social profiles. 🌐",
  "💡 Dexscreener Listing Bot is here to spotlight trending tokens from every chain. Verified projects only, with complete Telegram, website, and Twitter links. 🚀",
  "🎯 Ready to find the hottest tokens? Dexscreener Listing Bot showcases top trending tokens across all chains, fully verified with social details. ⚡",
  "🧠 Stay informed with Dexscreener Listing Bot! Get trending tokens from all blockchains, verified with comprehensive social links. 🌌",
  "💸 Looking for the next big thing? Dexscreener Listing Bot tracks verified tokens trending on every chain, with all their socials—Telegram, website, and Twitter! 📈",
  "🛠️ Your journey starts here! Dexscreener Listing Bot brings you trending tokens across all chains, fully verified with key social links. 💼",
  "💬 Want accurate data? I’m Dexscreener Listing Bot, showing trending tokens across every chain, with verified socials for deeper connection! 🚀",
  "🚀 Whether you’re new or experienced, Dexscreener Listing Bot keeps you updated with trending tokens from all chains, all verified with socials. 📉",
  "💥 Think tracking tokens is tough? Not with Dexscreener Listing Bot! Trending tokens on every chain, verified and with all their socials in one place! 📊",
  "🎓 Ready to learn more? Dexscreener Listing Bot gives you trending tokens from all networks, verified with complete Telegram, website, and Twitter links! 📚",
  "⚡ Want powerful insights? I’ve got trending tokens across all chains, verified and packed with all their socials to keep you connected. 🚀",
  "🌐 Explore trending tokens with Dexscreener Listing Bot! Covering every chain, fully verified with Telegram, website, and Twitter links. 🗺️",
  "📈 Looking for verified tokens? Dexscreener Listing Bot highlights trending tokens on all chains—complete with socials to keep you informed! 💹",
  "🎭 Discover the stars of the crypto space! Dexscreener Listing Bot showcases verified trending tokens from every chain, with full social profiles. 🌟",
  "💎 Find hidden gems with Dexscreener Listing Bot! Trending tokens from all chains, all verified with essential social links. 💎",
];

const greetings = [
  "👋 Welcome aboard! Ready to explore the latest crypto trends? 🚀",
  "✨ Greetings, future crypto legend! Let’s find your next big move! 💹",
  "🔍 Welcome! Let's uncover some trending tokens today. 📈",
  "💥 Hello, trailblazer! Ready to dive into the world of Dexscreener data? 💰",
  "🎉 Welcome to the crypto frontier! Time to conquer the markets! 🏆",
  "🚀 Hello, star trader! Let’s explore trending tokens and uncover hidden gems! 🌟",
  "🌟 Welcome, trendsetter! The crypto universe is yours to explore! 🌌",
  "🌐 Greetings, market explorer! Let’s decode the latest trends. 📊",
  "📈 Welcome to the hub of crypto insights and opportunities! Let's go! 🔥",
  "🧭 Ahoy, crypto adventurer! Let’s navigate the markets together! 🗺️",
  "💡 Bright minds think alike—welcome to Dexscreener Listing Bot! 💼",
  "🎯 Welcome, sharp shooter! Let’s aim for the top with today’s trending tokens! 🎯",
  "⚡ Boom! You’re in the right place for real-time token insights. ⚡",
  "👑 Welcome, market royalty! Let’s find some winning trades today! 👑",
  "🤑 Hello, future tycoon! Time to track the next breakout token! 💸",
  "🗞️ Welcome to the news desk of trending tokens! Let’s break it down. 📰",
  "🎓 Welcome, crypto scholar! Time to learn and earn with Dexscreener insights! 📚",
  "🛠️ Welcome, builder of wealth! Let’s craft your next winning strategy. 🔧",
  "🌈 Welcome to the rainbow of possibilities in crypto! Let’s start exploring! 🌈",
  "🔥 You’ve arrived at the hottest spot for crypto trends! Let's dive in! 🔥",
  "🚀 Lift off! You’ve entered the orbit of market insights and analysis. 🌌",
  "🌍 Welcome, citizen of the crypto world! Time to explore what’s trending. 🌐",
  "🦸 Welcome, hero! Let’s tackle the markets and seize new opportunities! 🦸‍♂️",
  "🎵 Welcome to the symphony of crypto success! Let’s hit the right notes. 🎶",
  "🌞 Hello, sunshine! Bright days are ahead in the crypto market! ☀️",
  "💬 Let’s chat about what’s trending and where the opportunities lie. 🗣️",
  "📊 Numbers don’t lie! Welcome to your daily dose of market data. 🔢",
  "🔗 Welcome! Let’s connect with the latest tokens and their communities. 🤝",
  "🎮 Game on! Let’s play smart and win big in the crypto markets. 🎮",
  "🚨 Alert! You’ve entered the zone of real-time crypto insights! 🚨",
  "🧙 Welcome, wizard! Let’s cast some magic on the markets. 🪄",
  "🌟 Shine bright! Let’s illuminate the path to crypto success. ✨",
  "🏆 Welcome, champion! Ready to claim some market victories? 🏆",
  "📫 You’ve got mail… and it’s filled with crypto insights! 📬",
  "🔮 Welcome, visionary! Let’s look into the crystal ball of crypto trends. 🔮",
  "⚙️ Welcome to the engine room of crypto analysis. Let’s power up! ⚙️",
  "💥 Boom! You’ve landed in the heart of crypto action! Let’s start exploring! 💥",
  "🧠 Welcome, mastermind! Let’s put those brilliant ideas to work. 🧠",
  "🎭 Welcome to the stage of the crypto theater—where trends are the stars! 🎭",
  "🌊 Welcome, wave rider! Let’s surf the crypto tides together! 🌊",
  "🚦 Green light! Time to move forward with today’s trending tokens! 🟢",
  "💎 Welcome, diamond hands! Let’s find some valuable gems. 💎",
  "🛰️ Welcome, space explorer! Let’s chart a course through the crypto galaxy! 🛰️",
  "⚡ Voltage is high! Ready to supercharge your crypto journey? ⚡",
  "🏖️ Welcome to the beach of opportunities. Let’s find some golden sands! 🏖️",
  "🌠 Make a wish—you’ve arrived where crypto dreams come true! 🌠",
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
💡 Get Started: Add me to your group and type /start${botName}
`;

const featuresMsg = `
  Free Features:
🚀 Trending verified Solana tokens market data and social links

  Premium Perks:
🚀 Zero Ads
`;

const groupMsg = `
 
⚡ I deliver verified ✅ crypto projects with trusted social media links directly from Dexscreener.  

🎯 Join our Alert Community: [@Dexscreener_Listing_Alert](https://t.me/Dexscreener_Listing_Alert)  

💬 Stay ahead, spot early opportunities, and let's make some gains together! 💸
`;

const channelMsg = `

⚡ I deliver verified ✅ crypto projects with trusted social media links directly from Dexscreener.  

🎯 Join our Alert Community: [@Dexscreener_Listing_Alert](https://t.me/Dexscreener_Listing_Alert)  

💬 Stay ahead, spot early opportunities, and let's make some gains together! 💸
`;

module.exports = {
  privateMsg,
  groupMsg,
  channelMsg,
  greetings,
  settingsMessages,
  featuresMsg,
  introductions,
};
