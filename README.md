# AI Study Notes Assistant

## Description
AI Study Notes Assistant is a simple AI-powered study helper built with Next.js. It answers questions about four supported topics: AI, Machine Learning, NLP, and Computer Vision.

## Features
- Answers questions about AI
- Answers questions about Machine Learning
- Answers questions about NLP
- Answers questions about Computer Vision
- Returns a clear fallback message for unsupported topics

## Tech Stack
- Next.js
- TypeScript
- Vercel

## Project Structure
- `app/page.tsx` - main frontend page
- `app/api/ask/route.ts` - backend API route for handling user questions
- `evaluation/cases.json` - evaluation test cases
- `final-results.md` - final evaluation results
- `improvement-note.md` - explanation of the improvement made

## How to Run Locally
1. Clone the repository.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000` in your browser.

## Usage
Type a question into the input box and click **Ask AI**.

### Supported example questions
- What is AI?
- What is Machine Learning?
- What is NLP?
- What is Computer Vision?

### Unsupported example questions
- What is deep learning?
- Tell me about robotics.

## Evaluation
The app was evaluated using 7 fixed test cases from `evaluation/cases.json`.

### Baseline
The baseline version answered supported questions, but its fallback logic could still guess answers for unsupported topics using weak word overlap.

### Improvement
The routing logic in `app/api/ask/route.ts` was updated to:
- improve direct topic matching
- better handle paraphrased inputs
- return a clear fallback message for unsupported topics

### Final Results
- Pass: 7/7
- Fail: 0/7

The improved version performed better than the baseline on the same evaluation set.

## Deployment
Live App: https://ai-study-notes-assistant.vercel.app/

## Author
Prince