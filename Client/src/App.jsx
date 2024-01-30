import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

import './App.css'


function App() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <>
      <div>
        {
          currentPath !== '/signIn' && currentPath !== '/signUp' && <Nav />
        }
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <div>
        {
          currentPath !== '/signIn' && currentPath !== '/signUp' && <Footer />
        }
      </div>

    </>
  )
}

export default App
