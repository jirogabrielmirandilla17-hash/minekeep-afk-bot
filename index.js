const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(process.env.PORT || 3000);

const bot = mineflayer.createBot({
  host: 'cjjsmp.minekeep.gg', 
  port: 25565,                  
  username: 'AFKSentry',        
  version: '1.21.3'             
});

bot.on('spawn', () => console.log('Bot logged into the server successfully!'));
bot.on('end', () => setTimeout(() => mineflayer.createBot(bot.options), 5000));
bot.on('error', (err) => console.log(err));
