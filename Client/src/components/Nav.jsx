import React from 'react'

import './../App.css'
import openVaultLogo from './../assets/openvault_logo.svg'

import {Link} from 'react-router-dom'

function Nav() {
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
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/about">About</Link>
        </p>
      </div>
    </>
  )
}

export default Nav
