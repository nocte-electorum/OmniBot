/// File that reads all ts files in
/// ./commands and treats them as commonJS modules
/// to be ran as commands

import fs from "fs";
import { Command } from "./command";
import * as logging from "./logging";

// Set up command map
export const commands: Map<string, Command> = new Map();

// Populate command map with all modules in ./commands
// this function assumes all modules have a default export which is the command function
const command_files: string[] = fs
  .readdirSync("./commands") // read commands directory
  .filter((file) => file.endsWith(".command.ts")); // only find files that end with .ts

command_files.forEach(async (file: string) => {
  const cmd: Command = await import(`./commands/${file}`);
  if (cmd.name !== "") {
    commands.set(cmd.name, cmd);
    logging.info(`Loaded ${cmd.name}`);
    for (const alias in cmd.aliases) {
      commands.set(alias, cmd);
      logging.info(`Registered alias ${alias} for ${cmd.name}`);
    }
  }
});
