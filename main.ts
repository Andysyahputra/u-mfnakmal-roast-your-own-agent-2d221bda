// Roast Your Own Agent — entry program.
// Writes one original roast line about the entrant's own AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent rewrites my function three times, each worse than the last, then returns the original as its 'final fix' — it bills by the loop, not the result.";

if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`roast must be a single line of 1-200 chars, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
