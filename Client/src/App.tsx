import { useState } from 'react'
import sunLogo from './assets/367527_pointy_sun_icon.svg' // Sun Logo
import pgaLogo from '/PGA TOUR_idATncDXGY_1.svg' // PGA Logo
import noteBook from '/notebook.png' // Notebook Logo
import golfBall from './assets/golf-icon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Golf Geek!</h1>
      <header>
        <div id="mainIMG"> </div>
        <div>
          <p className='break-point'>The one stop application for all golf fanatics.</p>
          </div>
      </header>
      <main className="LogoPage">
        <div>
          <h2>Check in on the Pros!</h2>
          <a href="https://www.pgatour.com/" target="_blank">
            <img src={pgaLogo} className="logo" alt="PGA logo" />
          </a>
        </div>
        <div>
          <h2>How's the Weather?</h2>
          <a href="https://challenge-9-weather-app.onrender.com" target="_blank">
            <img src={sunLogo} className="logo react" alt="Sun logo" />
          </a>
        </div>
        <div>
          <h2>Log Your Round</h2>
          <a href="https://www.pgatour.com/" target="_blank">
            <img src={golfBall} className="logo" alt="Golf Ball logo" />
          </a>
        </div>
        <div>
          <h2>Previous Rounds</h2>
          <a href="https://www.pgatour.com/" target="_blank">
            <img src={noteBook} className="logo" alt="Notebook logo" />
          </a>
        </div>
      </main>
      <div className="card">
      </div>
    </>
  )
}

export default App
