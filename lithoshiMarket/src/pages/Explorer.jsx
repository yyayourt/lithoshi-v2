import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarketCap from "../components/Explorer/MarketCap";
import Mint from "../components/Explorer/Mint";
import NFTExplorer from "../components/Explorer/NFTExplorer";
import Profile from "../components/Explorer/Profile";
import explorer from "../assets/Explorer/Explorer.svg";

function Explorer() {
    const [activeTab, setActiveTab] = useState("marketcap");
    const navigate = useNavigate();

    const renderContent = () => {
        switch (activeTab) {
            case "marketcap":
                return <MarketCap onTableRowClick={handleRowClick} />;
            case "mint":
                return <Mint />;
            case "nft":
                return <NFTExplorer />;
            case "profile":
                return <Profile />;
            default:
                return <MarketCap onTableRowClick={handleRowClick} />;
        }
    };

    const handleRowClick = (token) => {
        navigate(`/token/${token.ticker}`);
    };

    return (
        <div className="flex">
            <div className="flex-1 flex flex-col">
                <div className="p-4">
                    <div className="mt-4 bg-[#1E1E1F] text-white p-4 rounded-3xl">
                        <h2 className="flex gap-2 text-xl font-bold">
                            <img src={explorer} alt="" />
                            Top Market Cap / Cryptocurrency Prices
                        </h2>
                        <div className="flex items-center">
                            <div className="flex space-x-4 mb-4 w-[800px] p-[0.3%] h-[45px] rounded-lg mt-4 bg-[#151516]">
                                <button className={`w-[25%] rounded-md hover:bg-[#1E1E1F] ${activeTab === "marketcap" ? "bg-[#1E1E1F]" : ""}`} onClick={() => setActiveTab("marketcap")}>
                                    Market Cap
                                </button>
                                <button className={`w-[25%] rounded-md hover:bg-[#1E1E1F] ${activeTab === "mint" ? "bg-[#1E1E1F]" : ""}`} onClick={() => setActiveTab("mint")}>
                                    Mint
                                </button>
                                <button className={`w-[25%] rounded-md hover:bg-[#1E1E1F] ${activeTab === "nft" ? "bg-[#1E1E1F]" : ""}`} onClick={() => setActiveTab("nft")}>
                                    NFT
                                </button>
                                <button className={`w-[25%] rounded-md hover:bg-[#1E1E1F] ${activeTab === "profile" ? "bg-[#1E1E1F]" : ""}`} onClick={() => setActiveTab("profile")}>
                                    Profile
                                </button>
                            </div>
                        </div>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explorer;
