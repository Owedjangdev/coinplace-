import { createContext, useState, useEffect } from 'react' // 1. Correction de l'import (useState, useEffect)

export const CoinContext = createContext();

const CoinContextProvider = (props) => { 

    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$'
    });

    const fetchAllCoin = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json', 
                    'x-cg-demo-api-key': 'CG-wJQUzMn1RYwtSMgTdXWk8s6f'
                }
            };

            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data = await response.json();
            setAllCoins(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    // 2. Création de l'objet de contexte avec les valeurs à partager
    const contextValue = {
        allCoins, 
        currency, 
        setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children} 
        </CoinContext.Provider>
    );
}

export default CoinContextProvider; 