// initialize
require('dotenv').config();

// definitions
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ]});

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

// bot login
client.login(process.env.CLIENT_TOKEN);

client.on("messageCreate", (message) => {
    if (message.mentions.has(client.user)) {
        message.reply("Pong!");
    }
});
