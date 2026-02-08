import React, { useState, useEffect } from "react"
import Chart from 'react-google-charts'

const Linechart = ({historicalData}) => {

    const [data, setData] = useState([["Date", "Prices"]]); // Initialisation avec les titres

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        
        // Vérification de sécurité pour éviter de mapper sur du vide
        if (historicalData && historicalData.prices) {
            historicalData.prices.map((item) => {
                // Transformation du timestamp en date courte (ex: 08/02)
                const shortDate = `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`;
                dataCopy.push([shortDate, item[1]]);
            });
            setData(dataCopy);
        }
    }, [historicalData]);

    return (
       <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      
    />
    )
}

export default Linechart;