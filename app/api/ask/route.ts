import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "processed_notes.json");

export async function POST(req: NextRequest) {

  try {

    const body = await req.json();
    const question = body.question
  .toLowerCase()
  .replace(/[^\w\s]/g,"");

    const notes = JSON.parse(fs.readFileSync(dataPath,"utf-8"));

    let answer = "Sorry, I don't know the answer.";

    const stopWords = ["what","is","the","a","an","of","in","to","from","that","allows"];

    const questionWords = question
      .split(/\s+/)
      .filter(word => !stopWords.includes(word));

    for (let note of notes) {

      const cleanText = note.content
  .toLowerCase()
  .replace(/[^\w\s]/g,"");

const noteWords = cleanText.split(/\s+/);

      const matchCount = noteWords.filter(word =>
        questionWords.includes(word)
      ).length;

      if (matchCount > 0) {

        answer = note.content;
        break;

      }

    }

    return NextResponse.json({ answer });

  } catch (error) {

    return NextResponse.json({

      answer:"Error occurred"

    });

  }

}