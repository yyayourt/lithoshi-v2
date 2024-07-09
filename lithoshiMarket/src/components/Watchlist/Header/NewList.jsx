// src/components/Watchlist/NewList.js
export default function NewList({ toggleSetShowManageList }) {
    const handleClosePopUp = (e) => {
        if (e.target.classList.contains("bg-black")) {
            toggleSetShowManageList();
        }
    };

    return (
        <div className="bg-black bg-opacity-50 fixed inset-0 justify-center flex z-10" onClick={handleClosePopUp}>
            <div className="h-[220px] w-[720px] self-center p-8 rounded-xl bg-[#1E1E1F]">
                <div className="flex justify-between">
                    <p>Manage my list</p>
                    <button onClick={toggleSetShowManageList} className="rounded-lg">
                        <img src="/src/assets/cross.png" alt="" className="self-center opacity-50 w-[12px] h-[12px] mr-2" />
                    </button>
                </div>
                <div className="flex justify-between mt-5">
                    <div className="flex items-center h-[40px] w-[79%] bg-[#151516] rounded border border-white border-opacity-25">
                        <input type="text" className="bg-transparent px-4 placeholder:text-white placeholder:text-opacity-50" placeholder="New List" />
                    </div>
                    <button className="flex justify-center items-center h-[40px] w-[20%] bg-[#00D066] bg-opacity-10 rounded">
                        <p className="mr-1 text-xl text-[#00D066]">+</p>
                        <p className="text-[#00D066]">Create list</p>
                    </button>
                </div>
                <div className="mt-2">
                    <button className="w-full px-10 bg-[#151516] mt-2 rounded-lg h-[64px]">
                        <div className="flex justify-between">
                            <div className="w-[70%]">
                                <p className="text-left">My BRC</p>
                                <small>
                                    <p className="text-left text-white text-opacity-50">1 pair updated 1 day ago</p>
                                </small>
                            </div>
                            <img src="/src/assets/watchlist/edit.svg" alt="" className="self-center opacity-50 w-[26px] h-[30px]" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
