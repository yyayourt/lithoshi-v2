// src/pages/Watchlist.js
import { useState } from "react";
import MarketCap from "../components/Watchlist/MarketCap";
import Mint from "../components/Watchlist/Mint";
import WatchlistHeader from "../components/Watchlist/WatchlistHeader";
import IconWatchlist from "../assets/Watchlist/IconWatchlist.svg";
import NewList from "../components/Watchlist/Header/NewList";
import ShareMyListSM from "../components/Watchlist/Header/ShareMyList";

function Watchlist() {
    const [activeTab, setActiveTab] = useState("marketcap");
    const [showNewList, setShowNewList] = useState(false);
    const [ShowShareWatchList, setShowShareWatchList] = useState(false);

    const toggleSetShowManageList = () => {
        setShowNewList(!showNewList);
    };

    const toggleSetShowShareWatchList = () => {
        setShowShareWatchList(!ShowShareWatchList);
    };

    const renderContent = () => {
        switch (activeTab) {
            case "marketcap":
                return <MarketCap />;
            case "mint":
                return <Mint />;
            default:
                return <MarketCap />;
        }
    };

    return (
        <div className="p-4">
            <WatchlistHeader toggleSetShowManageList={toggleSetShowManageList} toggleSetShowShareWatchList={toggleSetShowShareWatchList} />
            <div className="bg-[#1E1E1F] text-white p-4 rounded-3xl">
                <h2 className="flex gap-2 text-xl font-bold mb-4">
                    <img src={IconWatchlist} alt="" />
                    Watchlist
                </h2>
                <div className="flex space-x-4 mb-4 w-[400px] p-2 h-[55px] rounded-lg mt-4 bg-[#151516]">
                    <button className={`w-[200px] px-4 rounded-md ${activeTab === "marketcap" ? "bg-[#563AFF]" : "bg-[#151516]"}`} onClick={() => setActiveTab("marketcap")}>
                        Market Cap
                    </button>
                    <button className={`w-[200px] px-4 rounded-md ml-2 ${activeTab === "mint" ? "bg-[#563AFF]" : "bg-[#151516]"}`} onClick={() => setActiveTab("mint")}>
                        Mint
                    </button>
                </div>
                <div className="p-4 bg-[#151516] rounded-3xl">{renderContent()}</div>
            </div>
            {showNewList && <NewList toggleSetShowManageList={toggleSetShowManageList} />}
            {ShowShareWatchList && <ShareMyListSM toggleSetShowShareWatchList={toggleSetShowShareWatchList} />}
        </div>
    );
}

export default Watchlist;
