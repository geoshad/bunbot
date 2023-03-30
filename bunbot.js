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

// replies with a greeting
client.on("messageCreate", (message) => {
    if (message.author == client.user) return; // prevents self-replies
    if (message.content === "hi!") {
        message.reply("hi!");
    }
});

// replies with "pong" when you ping the bot
client.on("messageCreate", (message) => {
    if (message.mentions.has(client.user)) {
        message.reply("pong!");
    }
});
