import { useState, useEffect, useContext } from 'react'
import { CoinContext } from '../assets/context/CoinContext';

//ceci en fait permet d'acceder au details dedier a la page coins pour afficher les details de chaque coin dans la page home
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  const [inputValue, setInputValue] = useState('');


const handlerInputChange = (e) => {
  setInputValue(e.target.value);

  if(e.target.value === ''){
    setDisplayCoins(allCoins);
  }
   }

  const handleSearchSubmit =  async (e) => {
    e.preventDefault();
    const filteredCoins = await allCoins.filter(coin =>
      coin.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setDisplayCoins(filteredCoins);
  } 



  useEffect(() => { 
    
      setDisplayCoins(allCoins);
    
  }, [allCoins])

  return (
    
     <div className="py-0 px-4 md:px-[10%] pb-25">
  {/* SECTION HERO */}
  <div className="hero-container">
  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Largest <br /> Crypto Marketplace
  </h1>
  <p className="w-full md:w-3/4 text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
          Welcome to the world's largest cryptocurrency marketplace. 
          Sign up to explore more about cryptos.
  </p>
  <form className="search-box" onSubmit={handleSearchSubmit}>
  <input type="text" onChange={handlerInputChange} value={inputValue} list="coin-list" placeholder="Search crypto.." required />


  <datalist id="coin-list">
    {allCoins.map((coin, index) => (
      <option key={index} value={coin.name} />
    ))}
  </datalist>
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
            <p className="hidden md:block">24H Change</p>
            <p className="hidden md:block">Market Cap</p>
          </div>

          {displayCoins.slice(0, 10).map((coin, index) => (
           <Link to={`coin/${coin.id}`} key={index} className="table-header hover:bg-white/5 transition-colors rounded-lg">
             {/* Colonne 1 : Rang */}
             <p className="font-bold">{coin.market_cap_rank}</p>

             {/* Colonne 2 : Coin + Image */}
             <div className="flex items-center gap-2 min-w-0">
               <img src={coin.image} className="w-6 md:w-8 flex-shrink-0" alt={coin.name} />
               <div className="min-w-0">
                 <p className="truncate font-medium">{coin.name}</p>
                 <p className="text-[9px] md:text-[10px] text-gray-400 uppercase">{coin.symbol}</p>
               </div>
             </div>

             {/* Colonne 3 : Prix (hidden sur mobile) */}
             <p className="hidden md:block">{currency.symbol} {coin.current_price.toLocaleString()}</p>

             {/* Colonne 4 : Variation 24h (affichée sur mobile) */}
             <p className={`font-medium ${coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
               {Math.floor(coin.price_change_percentage_24h * 100) / 100}%
             </p>

             {/* Colonne 5 : Market Cap (hidden sur mobile) */}
             <p className="hidden md:block text-right">{currency.symbol} {coin.market_cap.toLocaleString()}</p>
           </Link>
         ))}
       </div>
     </div>
   )
}

export default Home