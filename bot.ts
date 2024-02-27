//---------\\
// Imports \\
//---------\\
require('dotenv').config()
import { Client, Events, GatewayIntentBits } from 'discord.js'


//-----------\\
// Constants \\
//-----------\\
const token: string = (() : string => {
  const t: string | undefined = process.env.TOKEN;
  if (t === undefined) {
    throw "Token variable isn't defined!";
  } 
  return t as string;
})();

const client = new Client({ intents: [
  GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages
]});


//------------\\
// Bot Events \\
//------------\\
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);
