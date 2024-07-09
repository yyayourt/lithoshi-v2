import leftArrow from "../../assets/Alerts/leftArrow.svg";
import bell from "../../assets/Alerts/bell.svg";

function AddAlertModal({ onClose }) {
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={handleBackgroundClick}>
            <div className="flex flex-col justify-around bg-[#1E1E1F] p-8 rounded-lg z-50 w-[500px] h-[29%] rounded-[30px] border border-black border-solid">
                {" "}
                <div className="flex justify-between">
                    {" "}
                    <h2 className="text-2xl font-bold mb-2">Add Alert</h2>{" "}
                    <span className="text-gray-600 cursor-pointer text-xl" style={{ fontSize: "30px" }} onClick={onClose}>
                        &times;{" "}
                    </span>
                </div>
                <p className="border-b border-[#AEAAB5] mb-4 pb-3">Manage price alert</p>{" "}
                <div className="flex justify-start items-center gap-7 mb-4">
                    <p>Alert me when</p>
                    <select className="block w-[50%] px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 text-white bg-[#29292B]"></select>{" "}
                </div>{" "}
                <div className="flex justify-around border-b border-[#AEAAB5] mb-3 gap-4">
                    {" "}
                    <div className="mb-4 w-[44%]">
                        {" "}
                        <select className="block w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 text-white bg-[#29292B]">
                            <option value="">Select a ticker</option>{" "}
                        </select>{" "}
                    </div>{" "}
                    <div className="mb-4 w-[44%] flex items-center gap-2 w-full rounded-md focus:outline-none focus:border-blue-500 bg-[#29292B]">
                        <p className="bg-[#563AFF] h-full w-[15%] text-center rounded-l-md pt-2">$</p>
                        <input className="bg-[#29292B] w-[85%] focus:outline-none focus:border-blue-500" type="number" placeholder="Enter price" />{" "}
                    </div>{" "}
                </div>{" "}
                <div className="flex justify-around gap-10">
                    <button className="flex items-center justify-center gap-2 rounded-md bg-[#29292B] py-2 w-[49%]" onClick={onClose}>
                        <img src={leftArrow} alt="" /> back to the watchlist
                    </button>{" "}
                    <button className="flex items-center justify-center gap-2 bg-[#563AFF] text-white px-4 py-2 rounded-md hover:bg-[#563AFF] w-[47%]">
                        <img src={bell} alt="" />
                        Create alert
                    </button>{" "}
                </div>{" "}
            </div>
        </div>
    );
}

export default AddAlertModal;
