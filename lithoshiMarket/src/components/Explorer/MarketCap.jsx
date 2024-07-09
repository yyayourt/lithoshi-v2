import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination";

const ITEMS_PER_PAGE = 14;

function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue >= 1000 && suffixNum < suffixes.length - 1) {
        newValue /= 1000;
        suffixNum++;
    }
    return newValue.toFixed(2) + suffixes[suffixNum];
}

function MarketCapTable() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/Data/Explorer/Marketdata.json");
                if (Array.isArray(response.data)) {
                    setData(response.data);
                } else {
                    console.error("Unexpected data: ", response.data);
                }
            } catch (error) {
                console.error("Error loading market data", error);
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleRowClick = (token) => {
        navigate(`/token/${token.id}`, { state: { token } });
    };

    return (
        <div className="bg-[#1E1E1F] text-white p-4 rounded">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#151516]">
                        <th className="text-left pl-10 py-2">Name</th>
                        <th className="text-left">Position</th>
                        <th className="text-left">Price</th>
                        <th className="text-left pl-10 py-4">24h</th>
                        <th className="text-left">Available</th>
                        <th className="text-left">Transferable</th>
                        <th className="text-left">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.length > 0 ? (
                        currentPageData.map((token, index) => (
                            <tr className="border-t border-t-[#151516] cursor-pointer" key={index} onClick={() => handleRowClick(token)}>
                                <td className="pl-10 py-4">{token.ticker.toUpperCase()}</td>
                                <td>{token.min_listed_unit_price ? `$${parseFloat(token.min_listed_unit_price).toFixed(3)}` : "N/A"}</td>
                                <td>{token.holder_count ? `$${parseFloat(token.holder_count).toFixed(3)}` : "N/A"}</td>
                                <td className={`pl-10 py-4 ${parseFloat(token.vol_1d) > 0 ? "text-green-500" : parseFloat(token.vol_1d) < 0 ? "text-red-500" : ""}`}>
                                    {parseFloat(token.vol_1d) !== 0 ? parseFloat(token.vol_1d).toFixed(2) + "%" : "0%"}
                                </td>
                                <td>{token.tx_count ? Number(token.tx_count).toLocaleString() : "N/A"}</td>
                                <td>{token.sale_count ? Number(token.sale_count).toLocaleString() : "N/A"}</td>
                                <td>{token.marketcap ? abbreviateNumber(Number(token.marketcap)) : "N/A"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">Aucune donnée disponible</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default MarketCapTable;
