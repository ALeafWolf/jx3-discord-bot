// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
// const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
const token = process.env.CLIENT_TOKEN;

// Log in to Discord with your client's token
client.login(process.env.CLIENT_TOKEN);
