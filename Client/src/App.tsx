import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
    <div className='AppDiv'>
    <div id='NavBar'>
      <Navbar />
    </div>
      <main>
        <Outlet />
      </main>
    </div>
  </>
  )
}

export default App

