import { useState } from 'react'
import sunLogo from './assets/367527_pointy_sun_icon.svg'
import pgaLogo from '/PGA TOUR_idATncDXGY_1.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Check in on the Pros!</h1>
        <a href="https://www.pgatour.com/" target="_blank">
          <img src={pgaLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>How's the Weather?</h1>
        <a href="https://challenge-9-weather-app.onrender.com" target="_blank">
          <img src={sunLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
