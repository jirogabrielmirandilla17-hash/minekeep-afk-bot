const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(process.env.PORT || 3000);

console.log("Forcing connection to cjjsmp.minekeep.gg...");

const bot = mineflayer.createBot({
  host: 'cjjsmp.minekeep.gg', 
  port: 25565,                  
  username: 'AFKSentry',        
  version: '1.21.3'             
});

bot.on('spawn', () => console.log('SUCCESS: Bot logged into MineKeep!'));
bot.on('end', () => setTimeout(() => mineflayer.createBot(bot.options), 5000));
bot.on('error', (err) => console.log('Bot Network Error:', err.message));
