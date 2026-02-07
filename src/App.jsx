import  React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import CoinPage from './pages/Coin'
import Footer from './components/Footer'

  const App = () => {
  return (

    <div>

<Navbar />


<Routes>
  <Route path="/" element={<Home />} />

  <Route path="/coin/:coinId" element={<CoinPage />} />


</Routes>


<Footer/>
    </div>
  )
}

export default App