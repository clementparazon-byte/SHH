# Singapore Hackers Fund

## Overview
A React + TypeScript + Vite website for the Singapore Hackers Fund, an accelerator program for technical founders in Singapore. The site includes an AI chat feature powered by Google Gemini and an application form that sends emails via Resend.

## Project Structure
- `index.html` - Entry HTML file
- `index.tsx` - React app entry point
- `App.tsx` - Main React component
- `styles.css` - Global styles
- `components/` - React components (Header, Hero, Manifesto, BatchList, Footer, TerminalChat, ApplyForm)
- `services/` - API services (Gemini integration)
- `server/` - Express backend for email handling
- `types.ts` - TypeScript types
- `constants.ts` - Constants and configuration

## Tech Stack
- React 19
- TypeScript
- Vite 6
- Express.js (backend)
- Resend (email service)
- Google Gemini AI (@google/genai)
- Lucide React icons

## Development
- Frontend: `npm run dev` (serves on port 5000)
- Backend: `npx tsx server/index.ts` (serves on port 3001)
- Build: `npm run build`

## Environment Variables
- `GEMINI_API_KEY` - Google Gemini API key for the AI chat feature (optional)
- `RESEND_API_KEY` - Resend API key for sending application emails (required for form submission)

## Email Setup Notes
The application form sends emails to info@singaporehackersfund.com using Resend. To enable email functionality:
1. Sign up at https://resend.com
2. Get your API key
3. Add the RESEND_API_KEY secret in Replit
4. Note: You'll need to verify your domain (singaporehackersfund.com) in Resend to send from that domain

## Recent Changes
- December 10, 2025: Added Apply Now form with email functionality via Resend
- December 10, 2025: Initial Replit setup, configured Vite for port 5000 with proxy support
