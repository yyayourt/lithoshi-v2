import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

// Fonction pour récupérer les collections de NFT disponibles
const getNFTCollections = async (perPage = 10, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/nfts/list`, {
            params: {
                per_page: perPage,
                page: page,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching NFT collections:", error);
        throw error;
    }
};

// Fonction pour récupérer les données de marché d'une collection NFT
const getNFTMarketData = async (nftId) => {
    try {
        const response = await axios.get(`${BASE_URL}/nfts/${nftId}/tickers`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching NFT market data:", error);
        throw error;
    }
};

// Fonction pour récupérer les données historiques du marché d'une collection NFT
const getNFTHistoricalData = async (platformId, contractAddress) => {
    try {
        const response = await axios.get(`${BASE_URL}/nfts/${platformId}/contract/${contractAddress}/market_chart`, {
            params: {
                vs_currency: "usd",
                days: "30",
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching NFT historical data:", error);
        throw error;
    }
};

// Fonction pour récupérer les métadonnées d'une collection NFT
const getNFTMetadata = async (nftId) => {
    try {
        const response = await axios.get(`${BASE_URL}/nfts/${nftId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching NFT metadata:", error);
        throw error;
    }
};

export default {
    getNFTCollections,
    getNFTMarketData,
    getNFTHistoricalData,
    getNFTMetadata,
};
