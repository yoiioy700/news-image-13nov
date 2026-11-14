/**
 * Competition: news-image-01 (make.fun)
 * Entry generator for the 13 November 2026 hero-illustration poster.
 * Copies ./entry.png into MAKEFUN_OUTPUT_DIR (defaults to /output).
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const data = readFileSync(join(here, "entry.png"));
const outPath = join(outDir, "entry.png");
writeFileSync(outPath, data);
console.log(`news-image-01: wrote ${data.byteLength} bytes to ${outPath}`);
