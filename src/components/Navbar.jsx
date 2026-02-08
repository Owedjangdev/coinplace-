
import arrow_icon from '../assets/arrow_icon.png' 
import logo from '../assets/logo.png' 
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoinContext } from '../assets/context/CoinContext.jsx'


const Navbar = () => {

const {setCurrency} = useContext(CoinContext)

const handleCurrencyChange = (e) => {
switch(e.target.value){
case 'usd':
setCurrency({name:'usd', symbol:'$'})
break
case 'eur':
setCurrency({name:'eur', symbol:'€'})
break
case 'inr':
setCurrency({name:'inr', symbol:'₹'})
break
default:
setCurrency({name:'usd', symbol:'$'})
break   
}
} 

return (
  <nav className="nav-container">
    {/* Logo  */}
    <Link to="/">
      <img src={logo} alt="Logo" className="w-24 md:w-[max(12vw,120px)]" />
    </Link>

    {/* Menu de navigation */}
    <ul className="nav-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Features</Link></li>
      <li><Link to="/">Pricing</Link></li>
      <li><Link to="/">Blog</Link></li>
    </ul>

{/* Partie droite (Select + Button) */}
<div className="flex items-center gap-2 md:gap-[max(1vw,12px)] ml-auto">
<select className="currency-select" onChange={handleCurrencyChange}>
<option value="usd" className="currency-option">USD</option>
<option value="eur" className="currency-option">EUR</option>
<option value="inr" className="currency-option">INR</option>
</select>

<button className="btn-signup">
<span className="hidden sm:inline">Sign up</span>
<span className="sm:hidden">Sign</span>
<img src={arrow_icon} alt="" className="w-3" />
</button>
</div>
</nav>
)
}

export default Navbar