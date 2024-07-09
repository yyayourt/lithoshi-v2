import { useEffect, useState } from "react";
import { getToken } from "../UserProfile.jsx";
import axios from "axios";
import Pagination from "../../pagination.jsx"; // Assurez-vous que le chemin vers le composant Pagination est correct
import sendIcon from "../../../assets/Dashboard/activity/send.svg";
import receiveIcon from "../../../assets/Dashboard/activity/receive.svg";
import executeIcon from "../../../assets/Dashboard/activity/execute.svg";
import contractIcon from "../../../assets/Dashboard/activity/contract.svg";
import transaction from "../../../../public/Data/Activity.json";

const ITEMS_PER_PAGE = 5;
export function useTransactionCount() {
    const [transactionCount, setTransactionCount] = useState(0);

    useEffect(() => {
        setTransactionCount(transaction.length);
    }, []);

    return transactionCount;
}

function Activity() {
    const [activityData, setActivityData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/Data/Activity.json"); // Chemin relatif au dossier public
                if (Array.isArray(response.data)) {
                    setActivityData(response.data);
                } else {
                    console.error("Données inattendues : ", response.data);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des données des activités", error);
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(activityData.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageData = activityData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="bg-[#1E1E1F] text-white p-4 pt-0 rounded">
            <table className="w-full mt-4">
                <tbody>
                    {currentPageData.map((item, index) => {
                        // Determine which icon to display based on sale_price and wallet comparison
                        let iconToShow = null;
                        let transactionType = null;

                        if (item.sale_price === null) {
                            iconToShow = contractIcon;
                            transactionType = "Inscription";
                        } else if (item.sale_price < 0) {
                            iconToShow = executeIcon;
                            transactionType = "Transfer";
                        } else {
                            if (item.from_wallet === getToken()) {
                                iconToShow = sendIcon;
                                transactionType = "Send";
                            } else if (item.to_wallet === getToken()) {
                                iconToShow = receiveIcon;
                                transactionType = "Receive";
                            }
                        }

                        return (
                            <tr key={index} className={index === 0 ? null : "transaction border-t border-[#151516]"}>
                                <td className={"w-[150px]"} style={{ color: "rgb(107, 106, 109)" }}>
                                    <p>{item.ts}</p>
                                    <p>{item.from_wallet.substring(0, 4) + "[...]" + item.from_wallet.slice(-5)}</p>
                                </td>
                                <td className="flex text-left ml-8 g-1" style={{ color: "rgb(107, 106, 109)" }}>
                                    {iconToShow ? (
                                        <img src={iconToShow} className="h-[40px] w-[40px] mr-4" alt="" />
                                    ) : (
                                        <img src="/src/assets/Dashboard/activity/notification.svg" className="h-[45px] w-[45px]" alt="" />
                                    )}

                                    <div>
                                        <p>{transactionType}</p>
                                        <p>{item.to_wallet.substring(0, 4) + "[...]" + item.from_wallet.slice(-5)}</p>
                                    </div>
                                </td>
                                <td className="py-4 text-right">{item.data3}</td>
                                <td className="py-4 text-right">
                                    <p className="inline" style={{ color: "rgb(107, 106, 109)" }}>
                                        {item.type_of_money}{" "}
                                    </p>
                                    {item.Gas}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default Activity;
