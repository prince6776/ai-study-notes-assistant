# AI Study Notes Assistant

## Live Demo
https://ai-study-notes-assistant.vercel.app

## What it does
Answers 4 specific AI study questions using curated notes:
- What is AI?
- What is Machine Learning? 
- What is NLP?
- What is Computer Vision?

## Architecture
Raw data → ETL → JSON storage → API matching → Next.js UI → Vercel
- Raw sources: docs/raw-data.md
- ETL process: docs/etl-process.md  
- Storage: processed-notes.json

## 5 Required Skills
1. **grill-me** → docs/grill-me-notes.md
2. **write-a-prd** → Issue #1
3. **prd-to-issues** → Issues #2-6
4. **tdd** → 	ests/apitest.ts + e2especs.ts
5. **improve-codebase-architecture** → docs/architecture-note.md

## Out of scope
General Q&A, file upload, vector search (focused POC)
