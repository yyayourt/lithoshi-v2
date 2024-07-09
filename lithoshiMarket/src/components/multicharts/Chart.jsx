// C:\Users\yanis\Desktop\lithoshi-v2\lithoshiMarket\src\components\multicharts\Chart.jsx
import React from "react";
import Graph from "./graph.jsx";

function Chart({ token }) {
    if (!token) {
        return <p>Loading...</p>;
    }

    const { id, current_price, high_24h, circulating_supply } = token;

    return (
        <div className="bg-[#1e1e1f] rounded-2xl h-[400px]">
            <div className="p-4">
                <h2 className="text-lg font-bold">{id}</h2>
                <p className="text-xl">${current_price}</p>
                <p>High 24h: ${high_24h}</p>
                <p>Circulating Supply: {circulating_supply}</p>
            </div>
            <div className="h-24 bg-[#1e1e1f] mt-4 rounded">
                <Graph />
            </div>
        </div>
    );
}

export default Chart;
