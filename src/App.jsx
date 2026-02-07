import  React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import CoinPage from './pages/Coin'


  const App = () => {
  return (

    <div>

<Navbar />


<Routes>
  <Route path="/home" element={<Home />} />

  <Route path="/coin/:coinId" element={<CoinPage />} />


</Routes>



    </div>
  )
}

export default App