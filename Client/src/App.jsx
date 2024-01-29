import { useState } from 'react'

import openVaultLogo from './assets/openvault_logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://openvault.onrender.com/" target="_blank">
          <img src={openVaultLogo} className="logo react" alt="openVault logo" />
        </a>
      </div>
      {/* <h1>Open Vault</h1> */}
      <div className="card">
        <p>
          Encrypt Files | Share Private Data
        </p>
      </div>
      {/* <p className="read-the-docs">
        Get Started (click here)
      </p> */}
    </>
  )
}

export default App
