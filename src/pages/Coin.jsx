import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../assets/context/CoinContext.jsx'
import LineCharts from '../components/Linechart.jsx'



const Coin = () => {

  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();

  const {currency} = useContext(CoinContext)
  const { coinId } = useParams();
    

const fetchCoinData = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-wJQUzMn1RYwtSMgTdXWk8s6f'}
        };

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
        const data = await response.json();
        console.log(data);
        setCoinData(data);
    } catch (err) {
        console.error(err);
    }
}

const fetchHistoricalData = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json', 
                'x-cg-demo-api-key': 'CG-wJQUzMn1RYwtSMgTdXWk8s6f'
            }
        };

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
        const data = await response.json();
        console.log(data);
        setHistoricalData(data);
    } catch (err) {
        console.error(err);
    }
}

useEffect(() => {
  fetchCoinData();
  fetchHistoricalData();
}, [currency, coinId])




  return (
    <div className="text-white py-20 px-4">
      {coinData && historicalData ? (
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Deux images */}
            <div className="flex gap-4">
              <img src={coinData.image.large} alt={coinData.name} className="w-24 md:w-32" />
              <img src={coinData.image.large} alt={coinData.name} className="w-24 md:w-32" />
            </div>
            {/* Informations */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{coinData.name}</h1>
              <p className="text-lg text-gray-300">{coinData.symbol.toUpperCase()}</p>
            </div>
          </div>

          {/* Graphique */}
          <LineCharts historicalData={historicalData} />

          {/* Informations supplémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Market Rank */}
            <div className="bg-white/10 rounded-lg p-5 border border-white/20">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Crypto Market Rank</p>
              <p className="text-2xl font-bold text-brand-purple">#{coinData.market_cap_rank}</p>
            </div>

            {/* Current Price */}
            <div className="bg-white/10 rounded-lg p-5 border border-white/20">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Current Price</p>
              <p className="text-2xl font-bold text-white">{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</p>
            </div>

            {/* Market Cap */}
            <div className="bg-white/10 rounded-lg p-5 border border-white/20">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Market Cap</p>
              <p className="text-2xl font-bold text-white">{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</p>
            </div>

            {/* 24h High */}
            <div className="bg-white/10 rounded-lg p-5 border border-white/20">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">24 Hour High</p>
              <p className="text-2xl font-bold text-green-400">{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</p>
            </div>

            {/* 24h Low */}
            <div className="bg-white/10 rounded-lg p-5 border border-white/20">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">24 Hour Low</p>
              <p className="text-2xl font-bold text-red-400">{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <div className="flex flex-col items-center gap-4">
            
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-600 border-t-brand-purple"></div>
            <p className="text-gray-400">En cours de chargement...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Coin