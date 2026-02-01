# Recycling Production Line Manager Selection System

This project is a minimal system built to evaluate and rank candidates for a **Recycling Production Line Manager** role.  
It demonstrates database design, AI evaluation prompting, and a simple dashboard built with React.

The focus of this project is **clarity, structure, and usability**, not production-level complexity.

---

## What Has Been Implemented

### 1. Database Design
- A MySQL-compatible schema is provided with the following tables:
  - `candidates` – stores basic candidate details (name, experience, skills)
  - `evaluations` – stores AI-generated scores for:
    - Crisis management
    - Sustainability knowledge
    - Team motivation
  - `rankings` – represents candidate ranking based on total evaluation score
- SQL files included:
  - `backend/schema.sql`
  - `backend/sample_data.sql`
- Sample data represents 40 realistic candidates.

---

### 2. Random Candidate Data Generation
- Faker.js was used to generate realistic candidate data.
- Generated fields include:
  - Candidate name
  - Years of experience
  - Skills
  - Evaluation scores
- The generated data is written into SQL insert statements for easy loading.

---

### 3. AI Prompting
- Three structured AI evaluation prompts are defined:
  1. Crisis Management
  2. Sustainability Knowledge
  3. Team Motivation
- Each prompt includes a clear scoring rubric (0–100).
- AI responses are mocked using numeric scores to keep the system lightweight.
- Prompts are documented in:
  - `ai-prompts/prompts.md`

---

### 4. Dashboard (React + Vite)
- A single-page dashboard built using **React + Vite**.
- **Mantine UI** is used for layout and components.
- The dashboard includes:
  - **Leaderboard** showing the top 10 candidates by total score
  - **Skill heatmap** using color-coded cells to visualize evaluation scores
  - **Candidate cards** showing detailed profiles (experience, skills, total score)
- Dashboard data is loaded from a static JSON file:
  - `frontend/src/data/candidates.json`

---

## Tech Stack
- Frontend: React + Vite
- UI Components: Mantine UI
- Database: MySQL (schema only, no backend server)
- Data Generation: Faker.js
- AI Evaluation: Prompt-based (mocked responses)

---

## Project Structure

recycling-manager-assignment/
│
├── frontend/                          # React + Vite dashboard
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx                   # App entry point (MantineProvider)
│       ├── App.jsx                    # Leaderboard, heatmap, candidate cards
│       └── data/
│           └── candidates.json        # Mock candidate + score data
│
├── backend/                           # Database design (MySQL-compatible)
│   ├── schema.sql                     # Tables: candidates, evaluations, rankings
│   └── sample_data.sql                # 40 candidate records (generated)
│
├── ai-prompts/                        # AI evaluation prompts
│   └── prompts.md                     # Crisis, Sustainability, Team Motivation
│
├── dashboard.png                      # Visual proof of working dashboard
│   
│
└── README.md                          # Setup instructions & explanation


## How to Run the Frontend

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Steps

```bash
cd frontend
npm install
npm run dev
