import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Login/>
        <SignUp/>
      </div>

      <Footer/>
    </>
  )
}

export default App
