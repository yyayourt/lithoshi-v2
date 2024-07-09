// src/components/Explorer/NFTExplorer.js
import { useState, useEffect } from "react";
import nftService from "../../services/nftGeckoService";

function NFTExplorer() {
    const [nftNames, setNftNames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNFTData = async () => {
            try {
                const collections = await nftService.getNFTCollections(10, 1); // Limiter à 10 items par page, page 1
                const names = collections.map((collection) => collection.name);
                setNftNames(names);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching NFT data:", error);
                setLoading(false);
            }
        };

        fetchNFTData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-white">Top 10 NFT Collections</h2>
            <ul className="list-disc list-inside text-white">
                {nftNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default NFTExplorer;
