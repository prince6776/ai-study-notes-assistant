import { NextResponse } from "next/server";

const notes = [
  {
    topic: "ai",
    content: "Artificial Intelligence (AI) is the simulation of human intelligence in machines."
  },
  {
    topic: "machine learning",
    content: "Machine Learning is a branch of AI that allows systems to learn from data and improve without being explicitly programmed."
  },
  {
    topic: "nlp",
    content: "Natural Language Processing (NLP) is a field of AI that helps computers understand, interpret, and generate human language."
  },
  {
    topic: "computer vision",
    content: "Computer Vision is a field of AI that enables computers to interpret and understand images and videos."
  }
];

export async function POST(req: Request) {
  const body = await req.json();
  const question = (body.question || "").toLowerCase().trim();

  if (!question) {
    return NextResponse.json({ answer: "Please enter a question." });
  }

  if (
    question.includes("nlp") ||
    question.includes("natural language processing") ||
    question.includes("language processing")
  ) {
    return NextResponse.json({ answer: notes[2].content });
  }

  if (
    question.includes("machine learning") ||
    question.includes("ml") ||
    question.includes("learning from data")
  ) {
    return NextResponse.json({ answer: notes[1].content });
  }

  if (
    question.includes("computer vision") ||
    question.includes("vision") ||
    question.includes("images") ||
    question.includes("videos") ||
    question.includes("image recognition")
  ) {
    return NextResponse.json({ answer: notes[3].content });
  }

  if (
    question === "what is ai?" ||
    question === "what is ai" ||
    question.includes("artificial intelligence") ||
    question === "ai"
  ) {
    return NextResponse.json({ answer: notes[0].content });
  }

  return NextResponse.json({
    answer:
      "Sorry, this app currently supports only AI, Machine Learning, NLP, and Computer Vision."
  });
}