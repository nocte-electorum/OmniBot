//---------\\
// Imports \\
//---------\\
require('dotenv').config()
import { Client, Events, GatewayIntentBits } from 'discord.js'


//-----------\\
// Constants \\
//-----------\\
// Immediately called-then-defined function that
// either reads TOKEN from the .env file or crashes
const token: string = (() : string => {
  const t: string | undefined = process.env.TOKEN;
  if (t === undefined) {
    throw "Token variable isn't defined!";
  } 
  return t as string;
})();

// Set up client with specified intents (which information it'll receive)
const client = new Client({ intents: [
  GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages
]});


//------------\\
// Bot Events \\
//------------\\
// Function that runs only once on successful bot login
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to the bot (actually puts it online)
client.login(token);
