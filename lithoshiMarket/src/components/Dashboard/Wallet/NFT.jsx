import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../pagination.jsx"; // Assurez-vous que le chemin vers le composant Pagination est correct

const ITEMS_PER_PAGE = 5;

function NFT() {
    const [nftData, setNftData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/Data/NFT.json"); // Chemin relatif au dossier public
                if (Array.isArray(response.data)) {
                    setNftData(response.data);
                } else {
                    console.error("Données inattendues : ", response.data);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des données des NFTs", error);
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(nftData.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageData = nftData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="bg-[#1E1E1F] text-white p-4 rounded">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {currentPageData.length > 0 ? (
                    currentPageData.map((nft, index) => (
                        <div key={index} className="relative bg-[#151516] p-4 rounded-lg">
                            <img src={nft.content_url} alt={nft.metadata?.name || "NFT Image"} className="w-full h-auto rounded-lg" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
                                <h3 className="text-lg font-bold">{nft.metadata?.name || "Unnamed NFT"}</h3>
                                <p>{nft.last_sale_price ? `${nft.last_sale_price} ETH` : "No sale price available"}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-5 text-center">Aucune donnée disponible</div>
                )}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default NFT;
