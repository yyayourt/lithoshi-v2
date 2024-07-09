// C:\Users\yanis\Desktop\lithoshi-v2\lithoshiMarket\src\components\multicharts\AddChartModal.jsx
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import coinGeckoService from "../../services/coinGeckoService";

function AddChartModal({ isOpen, onClose, onAddToken }) {
    const [search, setSearch] = useState("");
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const modalRef = useRef(null);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleTokenClick = (token) => {
        onAddToken(token); // Pass the entire token object
        onClose();
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const data = await coinGeckoService.getMarketData();
                setTokens(data);
            } catch (error) {
                setError("Failed to fetch tokens");
            } finally {
                setLoading(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            fetchTokens();
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-[#1e1e1f] rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
                <button className="float-right text-gray-500 hover:text-black" onClick={onClose}>
                    &times;
                </button>
                <input type="text" placeholder="Rechercher un token..." value={search} onChange={handleSearchChange} className="w-full bg-[#1e1e1f] p-2 border rounded mb-4" />
                <div className="max-h-64 overflow-y-auto">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        tokens
                            .filter((token) => token.name.toLowerCase().includes(search.toLowerCase()))
                            .map((token) => (
                                <div key={token.id} onClick={() => handleTokenClick(token)} className="p-2 hover:bg-[#6B6A6D] cursor-pointer">
                                    {token.name}
                                </div>
                            ))
                    )}
                </div>
            </div>
        </div>
    ) : null;
}

AddChartModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAddToken: PropTypes.func.isRequired,
};

export default AddChartModal;
