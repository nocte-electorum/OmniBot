// Module to parse arguments from a message
import { GuildMember } from "discord.js";
import { PREFIX } from "./globals";

export class ParsedCommand {
  public name: string;
  public target?: GuildMember;
  public args: string[];

  constructor(name: string, args?: string[]) {
    this.name = name;
    this.args = args || [];
  }
}

export function parse(input: string): ParsedCommand | undefined {
  if (input === "" || !input.startsWith(PREFIX)) return undefined;
  const split: string[] = input.slice(PREFIX.length).split(" ");
  const commandName: string = split[0];
  const content: string = split.slice(1).join(" ");

  const args: string[] = []; // container for parsed args
  let currentArg: string = "";
  let stopMode: boolean = false; // bitflag (0 = ' ', 1 = '"')
  let escaped: boolean = false; // is next char escaped? (escape char = \)

  for (let i = 0; i < content.length; i++) {
    const char: string = content[i];
    if (escaped) {
    }
    if (char == '"') {
      if (!stopMode) {
        // Quotes are used for arguments with spaces
        // (similar to a Linux command line)
        stopMode = true;
        continue; // we don't treat the quote
      }
    }
  }
}
