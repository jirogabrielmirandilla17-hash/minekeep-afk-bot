const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// Web server to keep Render happy
app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(process.env.PORT || 3000);

// Replace with your MineKeep Server IP and Port
const bot = mineflayer.createBot({
  host: 'cjjsmp.minekeep.gg', // Change to your exact server address
  port: 25565,                  // Change if your server uses a different port
  username: 'AFKSentry',        // The name your bot will use in-game
  version: '1.21.3'             // Change to your server's Minecraft version
});

bot.on('spawn', () => console.log('Bot logged into the server successfully!'));
bot.on('end', () => setTimeout(() => mineflayer.createBot(bot.options), 5000)); // Auto-reconnect if kicked
bot.on('error', (err) => console.log(err));
