// src/pages/Multicharts.jsx
import { useState } from "react";
import AddChartModal from "../components/multicharts/AddChartModal.jsx";
import Chart from "../components/multicharts/Chart.jsx";

function Multicharts() {
    const [tokens, setTokens] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToken = (token) => {
        setTokens([...tokens, token]);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-row-reverse justify-end p-6 text-white gap-6">
            <button
                onClick={openModal}
                className="h-[400px] rounded-2xl bg-[#1e1e1f] h-80 w-96 flex justify-center items-center flex-col-reverse gap-2.5 text-[#6B6A6D] text-lg border-none cursor-pointer"
            >
                Add a new chart
                <p className="text-6xl font-light">+</p>
            </button>
            <div className="flex flex-wrap gap-4">
                {tokens.map((token) => (
                    <Chart key={token.id} token={token} />
                ))}
            </div>
            <AddChartModal isOpen={isModalOpen} onClose={closeModal} onAddToken={handleAddToken} />
        </div>
    );
}

export default Multicharts;
