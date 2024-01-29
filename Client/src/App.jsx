import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'
import Nav from './components/Nav'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      
      {/* <p className="read-the-docs"> Get Started (click here) </p> */}
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>

    </Router>

  )
}

export default App
