const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(process.env.PORT || 3000);

console.log("Connecting to MineKeep Network Hub...");

const bot = mineflayer.createBot({
  host: 'play.minekeep.net',   // Connects to the main MineKeep network
  port: 25565,                  
  username: 'AFKSentry',        
  version: '1.21.3'             
});

// Once the bot joins the main hub lobby, it will run the command to join your server
bot.on('spawn', () => {
  console.log('Logged into Hub! Moving to cjjsmp...');
  setTimeout(() => {
    bot.chat('/join cjjsmp');  // Sends the command to transfer to your server
  }, 3000); // Waits 3 seconds after spawning to type the command securely
});

bot.on('end', () => {
  console.log('Disconnected. Reconnecting in 10 seconds...');
  setTimeout(() => mineflayer.createBot(bot.options), 10000);
});

bot.on('error', (err) => console.log('Bot Network Error:', err.message));
