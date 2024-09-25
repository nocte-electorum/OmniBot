import { EmbedBuilder, User } from "discord.js";
import { Command } from "../command";
import { OK_COLOR } from "../globals";
import { ParsedCommand } from "../parser";

const zpf: Command = new Command({
  name: "zpf",
});

zpf.func = (cmd: ParsedCommand): void => {
  const channel = cmd.message.channel;
  const embed: EmbedBuilder = new EmbedBuilder()
    .setColor(OK_COLOR)
    .setTitle('PFP of ' + cmd.message.author.username)
    .setImage(User.avatarURL());
  channel.send({ embeds: [embed] });
};

export default zpf;
