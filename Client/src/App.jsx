import './App.css'

import Routes from "./routes";
import { useAuth } from './provider/authProvider';
import Nav from './components/Home/Nav'
import Footer from './components/Home/Footer';

function App() {

    const { token } = useAuth();

    return (
        <>
            {token && <Nav />}
            <Routes />
            {token && <Footer />}
        </>
    )
}

export default App
