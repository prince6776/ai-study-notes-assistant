# ETL Process (POC Manual Pipeline)

## Bronze → Silver → Gold

**Bronze (Raw)**: Wikipedia text, lecture notes, study guides
**Silver (Cleaned)**: 
- Removed headers/footers/references 
- Standardized formatting
- Extracted AI/ML/NLP/CV sections only

**Gold (Curated)**: processed-notes.json
- Structured Q&A format  
- Manual validation for demo reliability

**POC Choice**: Manual ETL for speed. Production = GitHub Actions + GCP bucket.
