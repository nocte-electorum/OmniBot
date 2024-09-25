import { EmbedBuilder } from "discord.js";
import { Command } from "../command";
import { OK_COLOR } from "../globals";
import { ParsedCommand } from "../parser";

const pfp: Command = new Command({
  name: "pfp",
});

pfp.func = (cmd: ParsedCommand): void => {
  const channel = cmd.message.channel;
  const embed: EmbedBuilder = new EmbedBuilder()
    .setColor(OK_COLOR)
    .setTitle('PFP of ' + cmd.message.author.username)
    .setImage(cmd.message.author.displayAvatarURL());
  channel.send({ embeds: [embed] });
};

export default pfp;
