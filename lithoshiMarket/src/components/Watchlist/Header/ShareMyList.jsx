/* eslint-disable react/prop-types */
//import React from "react";
import share from "../../../assets/Watchlist/share.png";

export default function ShareWatchListSM({ toggleSetShowShareWatchList, handleMyBRCButtonClick }) {
    const handleClosePopUp = (e) => {
        // Vérifie si l'élément cliqué est l'arrière-plan de la fenêtre pop-up
        if (e.target.classList.contains("bg-black")) {
            toggleSetShowShareWatchList(); // Ferme la fenêtre pop-up
        }
    };

    return (
        <div className="bg-black bg-opacity-50 fixed inset-0 flex justify-center z-10" onClick={handleClosePopUp}>
            <div className={`h-[320px] w-[720px] self-center p-8 rounded-xl bg-[#1E1E1F]`}>
                <div className="flex justify-between">
                    <p className="">Share my list</p>
                    <button onClick={toggleSetShowShareWatchList} className={`rounded-lg`}>
                        <span className="flex flex-row-reverse text-gray-600 cursor-pointer text-xl" style={{ fontSize: "30px" }} onClick={handleClosePopUp}>
                            &times;{" "}
                        </span>
                    </button>
                </div>

                <div className="mt-2">
                    <button className="w-full px-10 bg-[#151516] mt-2 rounded-lg h-[64px]" onClick={() => handleMyBRCButtonClick("My BRC")}>
                        <div className="flex justify-between">
                            <div className="w-[70%]">
                                <p className="text-left">My BRC</p>
                                <small>
                                    <p className="text-left text-white text-opacity-50">1 pair updated 1 day ago</p>
                                </small>
                            </div>
                            <img src={share} alt="" className="self-center opacity-50 w-[26px] h-[30px]" />
                        </div>
                    </button>

                    <button className="w-full px-10 bg-[#151516] mt-2 rounded-lg h-[64px]" onClick={() => handleMyBRCButtonClick("My BRC")}>
                        <div className="flex justify-between">
                            <div className="w-[70%]">
                                <p className="text-left">My BRC</p>
                                <small>
                                    <p className="text-left text-white text-opacity-50">1 pair updated 1 day ago</p>
                                </small>
                            </div>
                            <img src={share} alt="" className="self-center opacity-50 w-[26px] h-[30px]" />
                        </div>
                    </button>

                    <button className="w-full px-10 bg-[#151516] mt-2 rounded-lg h-[64px]" onClick={() => handleMyBRCButtonClick("My BRC")}>
                        <div className="flex justify-between">
                            <div className="w-[70%]">
                                <p className="text-left">My BRC</p>
                                <small>
                                    <p className="text-left text-white text-opacity-50">1 pair updated 1 day ago</p>
                                </small>
                            </div>
                            <img src={share} alt="" className="self-center opacity-50 w-[26px] h-[30px]" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
