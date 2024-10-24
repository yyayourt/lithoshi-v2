// src/components/multicharts/Chart.jsx
import PropTypes from "prop-types";
import Graph from "./graph.jsx";

function Chart({ token, onChartClick }) {
    if (!token) {
        return <p>Loading...</p>;
    }

    const { id, current_price, high_24h, circulating_supply } = token;

    return (
        <div className="bg-[#1e1e1f] rounded-2xl h-[400px] cursor-pointer" onClick={() => onChartClick(token)}>
            <div className="p-4">
                <h2 className="text-lg font-bold">{id}</h2>
                <p className="text-xl">${current_price}</p>
                <p>High 24h: ${high_24h}</p>
                <p>Circulating Supply: {circulating_supply}</p>
            </div>
            <div className="h-24 bg-[#1e1e1f] mt-4 rounded pointer-events-none">
                <Graph />
            </div>
        </div>
    );
}

Chart.propTypes = {
    token: PropTypes.object.isRequired,
    onChartClick: PropTypes.func.isRequired,
};

export default Chart;
