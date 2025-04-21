# SecondBrain - Knowledge Management System

A personal knowledge management system designed to organize and retrieve information efficiently.

## Project Structure

- `backend/`: Node.js server with API endpoints
- `frontend/`: React-based web interface
- `links.txt`: Quick reference URLs

## Tech Stack

**Backend**
- Node.js
- Express
- MongoDB (or other database)

**Frontend**
- React
- Redux (or Context API)
- TailwindCSS/Styled Components

## Features

- Note organization with tagging
- Full-text search
- Markdown support
- Cross-device synchronization

## Installation

1. Clone the repository
2. Install dependencies:
```bash
cd backend && npm install
cd ../frontend && npm install
```
3. Configure environment variables (see `.env.example`)

## Running the Application

Start both servers concurrently:
```bash
# In backend directory
npm start

# In frontend directory (separate terminal)
npm start
```

Access the application at `http://localhost:3000`

## Configuration

- Backend runs on port 5000 by default
- Frontend runs on port 3000
- API endpoints documented in `backend/routes/`