import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../pagination.jsx"; // Ensure this path is correct

const ITEMS_PER_PAGE = 5;

function Token() {
    const [walletData, setWalletData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/Data/WalletData.json"); // Relative path to public folder
                if (Array.isArray(response.data)) {
                    setWalletData(response.data);
                } else {
                    console.error("Unexpected data: ", response.data);
                }
            } catch (error) {
                console.error("Error loading wallet data", error);
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(walletData.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageData = walletData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
                        <th className="text-left">Marketcap</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.length > 0 ? (
                        currentPageData.map((item, index) => (
                            <tr className="border-t border-t-[#151516]" key={index}>
                                <td className="pl-10 py-4">{item.ticker.toUpperCase()}</td>
                                <td>{item.overall_balance}</td>
                                <td>${item.min_listed_unit_price.toFixed(3)}</td>
                                <td className={`pl-10 py-4 ${parseFloat(item.vol_1d) > 0 ? "text-green-500" : parseFloat(item.vol_1d) < 0 ? "text-red-500" : ""}`}>
                                    {parseFloat(item.vol_1d) !== 0 ? (parseFloat(item.vol_1d) / 10000).toFixed(1) + "%" : "0%"}
                                </td>
                                <td>{item.available_balance}</td>
                                <td>{item.transferrable_balance}</td>
                                <td>{(item.marketcap / 1e6).toFixed(2)}M</td>
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

export default Token;
