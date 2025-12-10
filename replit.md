# Singapore Hackers Fund

## Overview
A React + TypeScript + Vite website for the Singapore Hackers Fund, an accelerator program for technical founders in Singapore. The site includes an AI chat feature powered by Google Gemini.

## Project Structure
- `index.html` - Entry HTML file
- `index.tsx` - React app entry point
- `App.tsx` - Main React component
- `styles.css` - Global styles
- `components/` - React components (Header, Hero, Manifesto, BatchList, Footer, TerminalChat)
- `services/` - API services (Gemini integration)
- `types.ts` - TypeScript types
- `constants.ts` - Constants and configuration

## Tech Stack
- React 19
- TypeScript
- Vite 6
- Google Gemini AI (@google/genai)
- Lucide React icons

## Development
- Run: `npm run dev` (serves on port 5000)
- Build: `npm run build`

## Environment Variables
- `GEMINI_API_KEY` - Google Gemini API key for the AI chat feature (optional)

## Recent Changes
- December 10, 2025: Initial Replit setup, configured Vite for port 5000 with proxy support
