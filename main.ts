// The dog ate my homework — one funny excuse line, byte-for-byte.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line must stay byte-for-byte: one line, no trailing newline.
const LINE = "The dog ate my homework, then wrote a better essay than mine and asked for extra credit.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
