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
      // we need a special case here to avoid an infinite loop
      // with the next case if someone is escaping a backslash
      currentArg += char;
    } else if (char == "\\") {
      escaped = true;
    } else if (char == '"') {
      if (!stopMode) {
        // Quotes are used for arguments with spaces
        // (similar to a Linux command line)
        stopMode = true;
        continue; // we don't treat the quote as a letter
      } else {
        // we've already encounted a quote
        args.push(currentArg);
        currentArg = "";
        stopMode = false;
      }
    } else if (char == " " && !stopMode) {
      // we're not currently inside a quote, so we treat this
      // as a word break
      args.push(currentArg);
      currentArg = "";
    } else {
      // otherwise this is any normal character
      currentArg += char;
    }
  }

  let command = new ParsedCommand(commandName, args);
  return command;
}
