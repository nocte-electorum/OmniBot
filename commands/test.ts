import { EmbedBuilder, Message } from "discord.js";
import { Command } from "../command";
import { OK_COLOR } from "../globals";

const test: Command = new Command({ 
  name: "test"
});

test.func = (msg: Message, args: string[]) : void => {
  const embed: EmbedBuilder = new EmbedBuilder()
    .setColor(OK_COLOR)
    .setDescription("Bot working!");
  msg.channel.send({ embeds: [embed] })
}

export default test;
