import React from 'react'
import arrow_icon from '../assets/arrow_icon.png' 
import logo from '../assets/logo.png' 

const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* Logo  */}
      <img src={logo} alt="Logo" className="w-[max(12vw,120px)]" />

      {/* Menu de navigation */}
      <ul className="nav-menu">
        <li className="nav-link">Home</li>
        <li className="nav-link">Features</li>
        <li className="nav-link">Pricing</li>
        <li className="nav-link">Blog</li>
      </ul>

      {/* Partie droite (Select + Button) */}
      <div className="flex items-center gap-[max(1vw,12px)]">
        <select className="currency-select">
          <option value="usd" className="currency-option">USD</option>
          <option value="eur" className="currency-option">EUR</option>
          <option value="inr" className="currency-option">INR</option>
        </select>
        
        <button className="btn-signup">
          Sign up 
          <img src={arrow_icon} alt="" className="w-3" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar