// src/components/Watchlist/WatchlistHeader.js
import arrow from "../../assets/Watchlist/arrow.svg";
import crow from "../../assets/Watchlist/crow.svg";
import notif from "../../assets/Watchlist/notif.svg";
import pair from "../../assets/Watchlist/pair.svg";
import share from "../../assets/Watchlist/share.svg";
import Dropdown from "./Header/dropDown.jsx";

function WatchlistHeader({ toggleSetShowManageList, toggleSetShowShareWatchList }) {
    return (
        <div className="flex justify-between mb-4 bg-[#1E1E1F] p-1 rounded-lg gap-3">
            <Dropdown />
            <button className="flex items-center justify-between rounded-lg w-full px-4 py-2 bg-[#151516] rounded-md" onClick={toggleSetShowManageList}>
                New Watchlist
                <img src={crow} alt="" />
            </button>
            <button className="flex items-center justify-between rounded-lg w-full px-4 py-2 bg-[#151516] rounded-md">
                Add Pair
                <img src={pair} alt="" />
            </button>
            <button className="flex items-center justify-between rounded-lg w-full px-4 py-2 bg-[#151516] rounded-md">
                Add Alert
                <img src={notif} alt="" />
            </button>
            <button className="flex items-center justify-between rounded-lg w-full px-4 py-2 bg-[#151516] rounded-md" onClick={toggleSetShowShareWatchList}>
                Share this Watchlist
                <img src={share} alt="" />
            </button>
        </div>
    );
}

export default WatchlistHeader;
