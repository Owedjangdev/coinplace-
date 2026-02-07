import { useState, useEffect, useContext } from 'react'
import { CoinContext } from '../assets/context/CoinContext';

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);

  useEffect(() => { 
    if (Array.isArray(allCoins)) {
      setDisplayCoins(allCoins);
    }
  }, [allCoins])

  return (
    
     <div className="py-0 px-[10%] pb-25">
{/* SECTION HERO */}
<div className="hero-container">
<h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Largest <br /> Crypto Marketplace
</h1>
<p className="w-full md:w-3/4 text-gray-300 leading-relaxed text-lg">
          Welcome to the world's largest cryptocurrency marketplace. 
          Sign up to explore more about cryptos.
</p>
<form className="search-box">
<input type="text" placeholder="Search crypto.." required />
<button type="submit" className="bg-brand-purple text-white py-2 px-6 md:px-10 rounded-md font-medium">
            Search
</button>
</form>
</div>
      <div className="crypto-table">
        <div className="table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>

        {displayCoins.slice(0, 10).map((coin, index) => (
          <div key={coin.id} className="table-header">
            {/* Colonne 1 : Rang */}
            <p>{coin.market_cap_rank}</p>

            {/* Colonne 2 : Coin + Image */}
            <div className="flex items-center gap-2">
              <img src={coin.image} className="w-8" alt={coin.name} />
              <p>{coin.name} <span className="text-[10px] text-gray-400 uppercase">{coin.symbol}</span></p>
            </div>

            {/* Colonne 3 : Prix */}
            <p>{currency.symbol} {coin.current_price.toLocaleString()}</p>

            {/* Colonne 4 : Variation 24h */}
            <p className={`text-center font-medium ${coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {Math.floor(coin.price_change_percentage_24h * 100) / 100}%
            </p>

            {/* Colonne 5 : Market Cap */}
            <p className="text-right">{currency.symbol} {coin.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home