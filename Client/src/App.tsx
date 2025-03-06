// import { useState } from 'react'
import sunLogo from './assets/367527_pointy_sun_icon.svg' // Sun Logo
import pgaLogo from '/PGA TOUR_idATncDXGY_1.svg' // PGA Logo
import noteBook from '/notebook.png' // Notebook Logo
import golfBall from './assets/golf-icon.png'
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <>
      <h1 className='WTGG'>Welcome to Golf Geek!</h1>
      <header>
        <div className="text-content">
          <p className='break-point'>
            <span className='marck-script'>Golf Geek</span> <br></br> A unique application for golf fanatics. 
            Enjoy easy access to up-to-date news on the PGA Tour, 
            check the Weather and even log your rounds! See all previous rounds played and note your favorite things 
            about the course. <br /> <br />
            (Or how many mulligans you used!)
          </p>
        </div>
        <div id="mainIMG"></div>
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
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
    <div>
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
    </div>
  </>
  )
}

export default App

