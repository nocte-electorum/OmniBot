/// File that reads all ts files in
/// ./commands and treats them as commonJS modules
/// to be ran as commands

import fs from "fs";
import { Command } from "./command";

// Set up command map
export const commands: Map<string, Command> = new Map();

// Populate command map with all modules in ./commands
// this function assumes all modules have a default export which is the command function
const command_files: string[] = fs
  .readdirSync("./commands") // read commands directory
  .filter((file) => file.endsWith(".ts")); // only find files that end with .ts

for (const file in command_files) {
  const cmd: Command = await import(file);
  if (cmd.name !== "") {
    commands.set(cmd.name, cmd);
    for (const alias in cmd.aliases) {
      commands.set(alias, cmd);
    }
  }
}
