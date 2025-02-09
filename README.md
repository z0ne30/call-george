# George - Home Inspection Scheduling Assistant

## Overview
Voice-powered AI assistant for scheduling home inspections, built with:
- Vapi.ai for voice interactions
- Cal.com for appointment scheduling
- Neon Postgres for data storage
- Vercel for deployment

## Project Structure
```assistants/``` - Voice assistant configurations and prompts
```components/``` - React components
```lib/``` - Utility functions and API integrations
```src/``` - Main application code
```db/``` - Database schemas and queries

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in required values
4. Run development server: `npm run dev`

## Environment Variables
```plaintext
VAPI_API_KEY=
CAL_API_KEY=
NEON_DATABASE_URL=
```
