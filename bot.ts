//---------\\
// Imports \\
//---------\\
require("dotenv").config();
import { Client, Events, GatewayIntentBits, Message } from "discord.js";
import { PREFIX } from "./globals";
import { ParsedCommand, parse } from "./parser";
import * as logging from "./logging";
import { commands as CommandMap } from "./handler";
import { Command } from "./command";

//-----------\\
// Constants \\
//-----------\\
// Immediately called-then-defined function that
// either reads TOKEN from the .env file or crashes
const token: string = ((): string => {
  const t: string | undefined = process.env.TOKEN;
  if (t === undefined) {
    throw "Token variable isn't defined!";
  }
  return t as string;
})();

// Set up client with specified intents (which information it'll receive)
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

//------------\\
// Bot Events \\
//------------\\
// Function that runs only once on successful bot login
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, (msg: Message) => {
  if (msg.author.bot === true) return;
  if (msg.content.startsWith(PREFIX)) {
    let parsedCommand: ParsedCommand | undefined = parse(msg);
    if (parsedCommand != undefined) {
      let command: Command | undefined = CommandMap.get(parsedCommand.name);
      if (command) {
        command.func(parsedCommand);
      } else {
        logging.error("how did this even happen");
      }
    } else {
      logging.error("Attempted invalid command.");
    }
  }
});

// Log in to the bot (actually puts it online)
client.login(token);
