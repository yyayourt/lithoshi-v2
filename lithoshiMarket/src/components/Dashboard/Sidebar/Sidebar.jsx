import { useState } from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../../../assets/Sidebar/dashboard.svg";
import explorer from "../../../assets/Sidebar/globalsearch.svg";
import alerts from "../../../assets/Sidebar/alerts.svg";
import watchlist from "../../../assets/Sidebar/watchlist.svg";
import multicharts from "../../../assets/Sidebar/multicharts.svg";
import connect from "../../../assets/Sidebar/connect.svg";
import litoshispace from "../../../assets/Sidebar/litoshispace.svg";
import litoshiReduce from "../../../assets/Sidebar/litoshiReduce.svg";
import closeArrow from "../../../assets/Sidebar/angles-left-solid.svg";
import SearchInput from "./SearchInput";
import Modal from "../../Login/modalLogin";
// icônes des chains
import solana from "../../../assets/Sidebar/chains/solana.svg";
import Ethereum from "../../../assets/Sidebar/chains/ethereum.svg";
import bsc from "../../../assets/Sidebar/chains/bsc.svg";
import Arbitrum from "../../../assets/Sidebar/chains/arbitrum.svg";
import Polygon from "../../../assets/Sidebar/chains/polygon.svg";
import Avalanche from "../../../assets/Sidebar/chains/avalanche.svg";
import Optimism from "../../../assets/Sidebar/chains/optimism.svg";
import Injective from "../../../assets/Sidebar/chains/injective.svg";
import Fantom from "../../../assets/Sidebar/chains/fantom.svg";
import Kava from "../../../assets/Sidebar/chains/kava.svg";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div className={`bg-[#151516] text-white h-screen border-r border-[#404040] flex flex-col justify-between ${isCollapsed ? "w-20" : "w-64"}`}>
                <div>
                    <div className={`bg-[#1E1E1F] flex flex-col items-center pt-5${isCollapsed ? "" : ""}`}>
                        <img src={`${isCollapsed ? litoshiReduce : litoshispace}`} alt="Litoshi Space" className={`${isCollapsed ? "w-8 h-8" : ""}`} />
                        <SearchInput isCollapsed={isCollapsed} />
                    </div>

                    <div className={`mb-4 pl-4 pr-5 ${isCollapsed ? "pr-0 pl-0 flex justify-center" : ""}`}>
                        {!isCollapsed && <h2 className="text-sm text-[#AEAAB5] mb-2 pb-2 border-b border-[#AEAAB5] mt-3">Your profile</h2>}
                        <nav className="flex flex-col gap-[10px] space-y-2 mt-4">
                            <Link to="/dashboard" className="flex items-center space-x-2 hover:text-gray-400">
                                <img src={dashboardIcon} alt="Dashboard" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                {!isCollapsed && <span>Dashboard</span>}
                            </Link>
                            <Link to="/explorer" className="flex items-center space-x-2 hover:text-gray-400">
                                <img src={explorer} alt="Explorer" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                {!isCollapsed && <span>Explorer</span>}
                            </Link>
                            <Link to="/alerts" className="flex items-center space-x-2 hover:text-gray-400">
                                <img src={alerts} alt="Alerts" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                {!isCollapsed && <span>Alerts</span>}
                            </Link>
                            <Link to="/watchlist" className="flex items-center space-x-2 hover:text-gray-400">
                                <img src={watchlist} alt="Watchlist" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                {!isCollapsed && <span>Watchlist</span>}
                            </Link>
                            <Link to="/multicharts" className={`flex items-center space-x-2 hover:text-gray-400 ${isCollapsed ? "border-b border-[#AEAAB5] pb-6" : ""}`}>
                                <img src={multicharts} alt="Multicharts" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                {!isCollapsed && <span>Multicharts</span>}
                            </Link>
                        </nav>
                    </div>
                    <div className={`mb-4 pl-4 pr-5 flex flex-col ${isCollapsed ? "pr-0 pl-0 flex justify-center  items-center" : ""}`}>
                        {!isCollapsed && <h2 className="text-sm text-[#AEAAB5] mb-2 pb-2 border-b border-[#AEAAB5] pt-3">Chains</h2>}
                        <ul className={`space-y-2 flex flex-col  ${isCollapsed ? "gap-[10px]" : ""}`}>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2 pt-2">
                                    <img src={solana} alt="Solana" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Solana</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Ethereum} alt="Ethereum" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Ethereum</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={bsc} alt="BSC" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>BSC</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Arbitrum} alt="Arbitrum" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Arbitrum</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Polygon} alt="Polygon" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Polygon</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Avalanche} alt="Avalanche" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Avalanche</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Optimism} alt="Optimism" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Optimism</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Injective} alt="Injective" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Injective</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Fantom} alt="Fantom" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Fantom</span>}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400 flex gap-2">
                                    <img src={Kava} alt="Kava" className={`${isCollapsed ? "w-6 h-6" : ""}`} />
                                    {!isCollapsed && <span>Kava</span>}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button onClick={openModal} className="flex justify-center items-center w-full bg-[#29292B] p-3 gap-2 rounded">
                        <img src={connect} alt="Connect" />
                        {!isCollapsed && <span>Connect Wallet</span>}
                    </button>
                </div>
            </div>
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="flex items-center bg-[#29292B] h-[15px] pr-[5px] pl-[2px] py-[25px] border-gray-600 border rounded-r-lg border-bg">
                    <img src={closeArrow} alt="" className="w-[15px]" />
                </button>
            </div>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </>
    );
}

export default Sidebar;
