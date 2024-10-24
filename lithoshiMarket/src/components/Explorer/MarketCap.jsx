// src/pages/MarketCap.js

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination";
import SortableTable from "../SortableTable";

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
    const [sortConfig, setSortConfig] = useState({ key: "name", direction: "ascending" });
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

    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
            if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
            return 0;
        });
        setData(sortedData);
    };

    const handleRowClick = (token) => {
        navigate(`/token/${token.id}`, { state: { token } });
    };

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const columns = [
        { key: "ticker", label: "Name" },
        { key: "min_listed_unit_price", label: "Position", render: (value) => (value ? `$${parseFloat(value).toFixed(3)}` : "N/A") },
        { key: "holder_count", label: "Price", render: (value) => (value ? `$${parseFloat(value).toFixed(3)}` : "N/A") },
        {
            key: "vol_1d",
            label: "24h",
            render: (value) => (value !== 0 ? `${parseFloat(value).toFixed(2)}%` : "0%"),
            className: (value) => (parseFloat(value) > 0 ? "text-green-500" : parseFloat(value) < 0 ? "text-red-500" : ""),
        },
        { key: "tx_count", label: "Available", render: (value) => (value ? Number(value).toLocaleString() : "N/A") },
        { key: "sale_count", label: "Transferable", render: (value) => (value ? Number(value).toLocaleString() : "N/A") },
        { key: "marketcap", label: "Market Cap", render: (value) => (value ? abbreviateNumber(Number(value)) : "N/A") },
    ];

    return (
        <div className="bg-[#1E1E1F] text-white p-4 rounded">
            <SortableTable
                data={currentPageData}
                columns={columns}
                onSort={handleSort}
                sortConfig={sortConfig}
                onRowClick={handleRowClick} // Pass handleRowClick to SortableTable
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default MarketCapTable;
