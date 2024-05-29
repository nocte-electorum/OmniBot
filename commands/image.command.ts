import { EmbedBuilder } from "discord.js";
import { Command } from "../command";
import { OK_COLOR } from "../globals";
import { ParsedCommand } from "../parser";

const image: Command = new Command({
  name: "image",
});

image.func = (cmd: ParsedCommand): void => {
  const channel = cmd.message.channel;
  const embed: EmbedBuilder = new EmbedBuilder()
    .setColor(OK_COLOR)
    .setDescription("Bot working!");
  channel.send({ embeds: [embed] });
};

export default image;
