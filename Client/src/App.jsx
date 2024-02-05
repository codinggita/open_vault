import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './components/Home/Home'
import Users from './components/Profile/Users'
import About from './components/Home/About'
import Nav from './components/Home/Nav'
import SignIn from './components/Login/SignIn'
import SignUp from './components/Login/SignUp'
import Footer from './components/Home/Footer'

import './App.css'
import Encrypt from './components/Feature/Encrypt'
import Drop from './components/Feature/Drop'


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
                <Route path="/encrypt" element={<Encrypt />} />
                <Route path="/drop" element={<Drop />} />
                <Route path="/drop" element={<Drop />} />
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
