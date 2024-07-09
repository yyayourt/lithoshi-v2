import { useState } from "react";
import Token from "../components/Dashboard/Wallet/Token.jsx";
import NFT from "../components/Dashboard/Wallet/NFT.jsx";
import Activity from "../components/Dashboard/Wallet/Activity.jsx";
import UserProfile from "../components/Dashboard/UserProfile";
import EmptyCard from "../components/Dashboard/EmptyCard";
import wallet from "../assets/Dashboard/wallet.svg";
import { useTransactionCount } from "../components/Dashboard/Wallet/Activity.jsx";

function Dashboard() {
    const transactionCount = useTransactionCount();
    const [activeTab, setActiveTab] = useState("token");

    const renderContent = () => {
        switch (activeTab) {
            case "token":
                return <Token />;
            case "nft":
                return <NFT />;
            case "activity":
                return <Activity />;
            default:
                return <Token />;
        }
    };

    return (
        <div className="flex">
            <div className="flex-1 flex flex-col">
                <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <UserProfile />
                        <EmptyCard />
                    </div>
                    <div className="mt-4 bg-[#1E1E1F] text-white p-4 rounded-3xl">
                        <h2 className="flex gap-2 text-xl font-bold">
                            <img src={wallet} alt="" />
                            Wallet
                        </h2>
                        <div className="flex items-center">
                            <div className="flex space-x-4 mb-4 w-[270px] p-[0.3%] h-[45px] rounded-lg mt-4 bg-[#151516]">
                                <button className={`w-[90px] rounded-md ${activeTab === "token" ? "bg-[#563AFF]" : ""}`} onClick={() => setActiveTab("token")}>
                                    Token
                                </button>
                                <button className={`w-[90px] rounded-md ${activeTab === "nft" ? "bg-[#563AFF]" : ""}`} onClick={() => setActiveTab("nft")}>
                                    NFT
                                </button>
                                <button className={`w-[90px] rounded-md ${activeTab === "activity" ? "bg-[#563AFF]" : ""}`} onClick={() => setActiveTab("activity")}>
                                    Activity
                                </button>
                            </div>
                            {activeTab === "activity" && <p className="mt-3 ml-20">{transactionCount} transactions</p>}
                        </div>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
