// src/components/SearchPopUp.jsx
//import React from "react";
import spacehship from "../../../assets/Sidebar/search/spaceship.svg";
import past from "../../../assets/Sidebar/search/past.svg";
import defaultAvatar from "../../../assets/Sidebar/search/default-avatar.png";
import closeIcon from "../../../assets/Sidebar/search/cross.png";
import searchIcon from "../../../assets/Sidebar/search/search.svg";
import PropTypes from "prop-types";

const SearchPopUp = ({ handleClose }) => {
    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains("bg-black")) {
            handleClose();
        }
    };

    return (
        <div className="bg-black bg-opacity-50 fixed inset-0 justify-center flex z-10" onClick={handleBackgroundClick}>
            <div className="h-[520px] w-[750px] self-center p-4 rounded-3xl bg-[#1E1E1F]">
                <div className="bg-[#151516] p-2 flex rounded-lg border border-white border-opacity-10">
                    <img src={searchIcon} className="opacity-50" alt="Search" />
                    <input
                        type="text"
                        placeholder="Search"
                        className=" w-[100%] bg-[#151516] text-left placeholder:text-white placeholder:opacity-50 ml-2 focus:outline-none focus:border-transparent"
                    />
                    <button onClick={handleClose} className="rounded-lg w-[25px] flex justify-end">
                        <img src={closeIcon} alt="Close" className="opacity-50 w-[12px] h-[12px] self-center mr-2" />
                    </button>
                </div>

                <div className="bg-[#151516] flex justify-left p-3 rounded-lg mt-4">
                    <img src={defaultAvatar} className="rounded-full h-[50px]" alt="Avatar" />
                    <div className="flex w-full justify-between">
                        <div className="self-center ml-3">
                            <p className="text-xs">MCPEPE</p>
                            <p className="text-xs">Traders Invest $7 Million in Bitcoin Minetrix, Buy This Stake To Earn Coin Before Price Increase</p>
                            <p className="text-xs text-[#FD5A00]">Buy $BTCMTX Now!</p>
                        </div>
                        <div className="items-right">
                            <p className="text-xs opacity-50">Ad x</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-5 text-xl">
                    <p className="flex text-[#FD5A00] mr-1 gap-2">
                        <img src={spacehship} alt="Trending" />
                        Trending
                    </p>
                    <p>on Litoshi</p>
                </div>

                <div className="flex mt-4 mx-5 justify-between flex-wrap">
                    {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="rounded-lg h-[100px] w-[150px] bg-[#151516]">
                            <img src={defaultAvatar} className="h-[100px] w-[150px] rounded-lg" alt="Trending Item" />
                        </div>
                    ))}
                </div>

                <div className="flex mt-5 text-xl">
                    <p className="flex gap-2">
                        <img src={past} alt="Past Search" />
                        Past Search
                    </p>
                </div>

                <div className="flex mt-4 mx-5 justify-between flex-wrap">
                    {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="rounded-lg h-[100px] w-[150px] bg-[#151516]">
                            <img src={defaultAvatar} className="h-[100px] w-[150px] rounded-lg" alt="Past Search Item" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

SearchPopUp.propTypes = {
    handleClose: PropTypes.func.isRequired,
};

export default SearchPopUp;
