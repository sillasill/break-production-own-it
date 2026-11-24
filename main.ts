import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I deployed untested code to production at 4:59 PM on a Friday. The database is gone, the backups were a lie, and I am still here.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) throw new Error("entry must be 1-200 non-blank characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
