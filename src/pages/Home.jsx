import React from 'react'

const Home = () => {
  return (
    <div className="py-0 px-[10%] pb-25">
      {/* SECTION HERO */}
      <div className="max-w-[800px] mx-auto mt-20 md:mt-40 flex flex-col items-center text-center gap-8">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Largest <br /> Crypto Marketplace
        </h1>
        
        <p className="w-full md:w-3/4 text-gray-300 leading-relaxed text-lg">
          Welcome to the world's largest cryptocurrency marketplace. 
          Sign up to explore more about cryptos.
        </p>

        <form className="flex justify-between items-center bg-white p-2 rounded-lg w-full max-w-[600px] shadow-lg">
          <input 
            type="text" 
            placeholder="Search crypto.." 
            className="flex-1 bg-transparent border-none outline-none text-black p-2 text-base placeholder:text-gray-500" 
            required 
          />
          <button 
            type="submit" 
            className="bg-[#7927ff] text-white py-2 px-6 md:px-10 rounded-md cursor-pointer hover:bg-purple-700 transition-all font-medium"
          >
            Search
          </button>
        </form>
      </div>

      {/* SECTION TABLEAU DES CRYPTOS (Ajouté selon tes captures) */}
      <div className="max-w-[800px] mx-auto mt-12 bg-gradient-to-b from-[#0b004e]/50 to-transparent rounded-xl p-5 shadow-2xl">
        {/* En-tête du tableau (table-layout) */}
        <div className="grid grid-cols-[50px_2fr_1fr_1fr_1.5fr] items-center py-4 px-5 border-b border-white/10 text-sm md:text-base font-semibold text-gray-200">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>

        {/* Ici, on affichera les données de l'API. 
          Pour l'instant, voici un exemple statique basé sur le tutoriel 
        */}
        <div className="grid grid-cols-[50px_2fr_1fr_1fr_1.5fr] items-center py-4 px-5 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer last:border-none">
          <p>1</p>
          <div className="flex items-center gap-2">
            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" className="w-8" alt="btc" />
            <p>Bitcoin <span className="text-xs text-gray-400 uppercase">btc</span></p>
          </div>
          <p>$45,000</p>
          <p className="text-center text-green-400">+2.5%</p>
          <p className="text-right">$850,000,000,000</p>
        </div>
      </div>
    </div>
  )
}

export default Home