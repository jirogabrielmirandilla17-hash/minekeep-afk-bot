const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is active!'));
app.listen(process.env.PORT || 3000);

// This forces the bot to use the settings we just saved in Render
const serverHost = process.env.MINECRAFT_HOST || 'cjjsmp.minekeep.gg';
const serverPort = parseInt(process.env.MINECRAFT_PORT) || 25565;

console.log(`Attempting to connect to: ${serverHost}:${serverPort}`);

const bot = mineflayer.createBot({
  host: serverHost, 
  port: serverPort,                  
  username: 'AFKSentry',        
  version: '1.21.3'             
});

bot.on('spawn', () => console.log('Bot logged into the server successfully!'));
bot.on('end', () => setTimeout(() => mineflayer.createBot(bot.options), 5000));
bot.on('error', (err) => console.log('Bot Error:', err.message));
