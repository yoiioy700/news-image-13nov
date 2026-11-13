// make.fun competition: news-image-01 — emits the day's news poster (entry.png)
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const data = readFileSync("./entry.png");
writeFileSync(join(outDir, "entry.png"), data);
console.log(`news-image-01: wrote ${data.byteLength} bytes`);
