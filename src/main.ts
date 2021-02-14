import {Client} from 'discord.js';
import {botToken, finnhubAPIKey} from './secrets.json';
import {StockManager} from './structures/stock-manager';

const stockManager = new StockManager(finnhubAPIKey);
const client = new Client();

client.on('ready', async ()=>{
  console.log(`${client.user.tag} is ready!`);
});

client.login(botToken);
