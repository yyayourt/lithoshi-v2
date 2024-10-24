import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../../pagination.jsx";
import SortableTable from "../../SortableTable.jsx"; // Assurez-vous que le chemin est correct

const ITEMS_PER_PAGE = 5;

function Token() {
    const [walletData, setWalletData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/Data/WalletData.json");
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

    const handleRowClick = (token) => {
        navigate(`/token/${token.id}`, { state: { token } });
    };

    const handleSort = (column) => {
        let direction = "ascending";
        if (sortConfig.key === column && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key: column, direction });
    };

    const sortedData = React.useMemo(() => {
        let sortableItems = [...walletData];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [walletData, sortConfig]);

    const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageData = sortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const columns = [
        { key: "ticker", label: "Name", render: (value) => value.toUpperCase() },
        { key: "overall_balance", label: "Position" },
        { key: "min_listed_unit_price", label: "Price", render: (value) => `$${value.toFixed(3)}` },
        {
            key: "vol_1d",
            label: "24h",
            render: (value) => (
                <span className={parseFloat(value) > 0 ? "text-green-500" : parseFloat(value) < 0 ? "text-red-500" : ""}>
                    {parseFloat(value) !== 0 ? (parseFloat(value) / 10000).toFixed(1) + "%" : "0%"}
                </span>
            ),
        },
        { key: "available_balance", label: "Available" },
        { key: "transferrable_balance", label: "Transferable" },
        { key: "marketcap", label: "Marketcap", render: (value) => `${(value / 1e6).toFixed(2)}M` },
    ];

    return (
        <div className="bg-[#1E1E1F] text-white p-4 rounded">
            <SortableTable data={currentPageData} columns={columns} onSort={handleSort} sortConfig={sortConfig} onRowClick={handleRowClick} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default Token;
