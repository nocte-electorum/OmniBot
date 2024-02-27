/// File that reads all ts files in 
/// ./commands and treats them as commonJS modules
/// to be ran as commands

import fs from 'fs'

// Set up command map
const commands: Map<string, (args: string[]) => void> = new Map();

// Populate command map with all modules in ./commands
// this function assumes all modules have a default export which is the command function
const command_files: string[] = fs.readdirSync("./commands")
  .filter(file => file.endsWith(".ts") && file !== "template.ts")

for (const file in command_files) {
  const cmd_func: (args: string[]) => void = await import(file);
  commands.set(file, cmd_func);
}
