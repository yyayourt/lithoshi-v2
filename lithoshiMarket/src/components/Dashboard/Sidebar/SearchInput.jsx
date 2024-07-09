// src/components/Dashboard/Sidebar/SearchInput.jsx
import { useState } from "react";
import searchIcon from "../../../assets/Sidebar/search/search.svg";
import SearchPopUp from "./SearchPopUp";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ isCollapsed }) => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const handleSearchClick = () => {
        setIsPopUpVisible(true);
    };

    const handleClosePopUp = () => {
        setIsPopUpVisible(false);
    };

    return (
        <div className="relative mb-4 flex flex-col items-center">
            <div className={`fmx-auto flex w-[100%] bg-[#29292B] rounded-lg border-[#404040] p-[7px] border rounded mt-5 gap-1  cursor-pointer`}>
                <img src={searchIcon} alt="Search" className={`${isCollapsed ? "w-6 h-6" : ""}`} onClick={handleSearchClick} />
                <input
                    type="text"
                    placeholder="Search"
                    name="useless"
                    className={`w-[100%] bg-[#29292B] text-white focus:outline-none focus:border-transparent  ${isCollapsed ? "hidden" : ""}`}
                    onClick={handleSearchClick}
                />
            </div>
            {isPopUpVisible && <SearchPopUp handleClose={handleClosePopUp} />}
        </div>
    );
};

export default SearchInput;
