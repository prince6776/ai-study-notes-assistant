import fs from "fs";

const rawText = fs.readFileSync("data/raw_notes.txt", "utf-8");

const chunks = rawText
  .split(/\r?\n/)
  .map((text, index) => ({
    id: index,
    content: text.trim()
  }))
  .filter(item => item.content.length > 0);

fs.writeFileSync(
  "data/processed_notes.json",
  JSON.stringify(chunks, null, 2)
);

console.log("ETL finished");