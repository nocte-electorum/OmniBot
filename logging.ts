// quickly made module, needs revamp later
export function info(s: string) {
  console.log("INFO :| %s", s);
}

export function error(s: string) {
  console.log("\x1b[31mERROR :| %s\x1b[0m", s);
}

export function ok(s: string) {
  console.log("\x1b[32mSUCCESS :| %s\x1b[0m", s);
}
