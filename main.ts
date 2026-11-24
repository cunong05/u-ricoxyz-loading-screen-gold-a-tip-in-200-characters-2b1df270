// Loading Screen Gold — a single loading-screen tip (<= 200 chars).
// Node 22, stdlib only. Writes the entry to /output/entry.txt and
// verifies the written bytes round-trip byte-identically.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Tip: the build is not stuck. It is thinking about all the code you wrote at 2 a.m. Go drink water. The compiler will still be judging you when you get back.";

// Guards: 1-200 characters, single line, non-whitespace only, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`ENTRY must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("ENTRY must not be only whitespace");
}

// Verify the entry against every brief rule in one place so the
// checks stay in sync if the entry text is ever replaced.
function verifyEntry(entry: string): void {
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`ENTRY must be 1-200 characters, got ${entry.length}`);
  }
  if (/\r|\n/.test(entry)) {
    throw new Error("ENTRY must be a single line");
  }
  if (entry.trim().length === 0) {
    throw new Error("ENTRY must not be only whitespace");
  }
}

verifyEntry(ENTRY);

const root = dirname(fileURLToPath(import.meta.url));
const outDir = join(root, "output");
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
// Write without a trailing newline: the file must contain exactly
// the entry bytes, nothing more, so the sha256 of entry.txt matches
// the sha256 of ENTRY itself.
writeFileSync(outFile, ENTRY, "utf8");

// Read back and throw if the bytes differ.
const readBack = readFileSync(outFile, "utf8");
if (readBack !== ENTRY) {
  throw new Error("entry.txt does not match ENTRY after write");
}

console.log(`Wrote ${outFile} (${ENTRY.length} characters)`);
