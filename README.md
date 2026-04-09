# AI Study Notes Assistant

AI Study Notes Assistant is a small end-to-end AI web application built with Next.js. It answers beginner AI questions using curated study notes and a retrieval-based workflow.

## Features

- Ask beginner questions about AI topics
- Retrieve relevant note content before generating answers
- Support focused topics such as:
  - What is AI?
  - What is Machine Learning?
  - What is NLP?
  - What is Computer Vision?
- Simple web interface for question and answer flow
- Designed as a proof of concept for an end-to-end AI assignment

## Architecture

This project follows a simple end-to-end workflow:

1. Raw notes are collected and stored
2. Notes are cleaned and chunked through ETL
3. Curated chunks are stored in structured files
4. The app retrieves relevant chunks for a user question
5. The reasoning layer generates an answer from the retrieved context
6. The answer is shown in the Next.js user interface

## Tech Stack

- Next.js
- TypeScript
- Retrieval-based AI workflow
- Vercel for deployment

## Project Structure

```text
app/        -> Next.js app router pages and API routes
data/       -> raw, processed, and curated note files
docs/       -> planning notes, PRD support files, architecture notes
lib/        -> retrieval logic and helper functions
public/     -> static assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Usage

Example supported questions:

- What is AI?
- What is Machine Learning?
- What is NLP?
- What is Computer Vision?

The app is intentionally narrow in scope and only answers from curated notes.

## Testing

Run project tests with:

```bash
npm test
```

If Playwright is included, run end-to-end tests with:

```bash
npx playwright test
```

## Deployment

This project is intended to be deployed on Vercel. Next.js projects can usually be deployed on Vercel using the default project settings after importing the GitHub repository. [web:24][web:21]

## Assignment Workflow Evidence

This repository includes evidence for:
- grill-me
- write-a-prd
- prd-to-issues
- tdd
- improve-codebase-architecture

Supporting notes and artifacts are stored in the repository and GitHub Issues.

## Author

Prince Solanki
