import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Testing Scorecard and PreviousRounds
import ScoreCard from './pages/ScoreCard.tsx'
import PreviousRounds from './pages/PreviousRounds.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ScoreCard />
    <PreviousRounds />
  </StrictMode>,
)
