import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

// Fonction pour récupérer les données de marché des cryptomonnaies
const getMarketData = async (perPage = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/markets`, {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: perPage,
                page: 1,
                sparkline: false,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching market data:", error);
        throw error;
    }
};

// Fonction pour récupérer le prix d'un token spécifique
const getTokenPrice = async (tokenId) => {
    try {
        const response = await axios.get(`${BASE_URL}/simple/price`, {
            params: {
                ids: tokenId,
                vs_currencies: "usd",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching token price:", error);
        throw error;
    }
};

// Fonction pour récupérer les informations de marché
const getMarketInfo = async (tokenId) => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/${tokenId}/market_chart`, {
            params: {
                vs_currency: "usd",
                days: "1",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching market info:", error);
        throw error;
    }
};

// Fonction pour récupérer les soldes de portefeuille
const getWalletBalances = async () => {
    return {};
};

// Fonction pour récupérer la liste des cryptomonnaies disponibles
const getCoinList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/list`);
        return response.data;
    } catch (error) {
        console.error("Error fetching coin list:", error);
        throw error;
    }
};

// Fonction pour récupérer les données historiques d'une cryptomonnaie
const getHistoricalData = async (tokenId, date) => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/${tokenId}/history`, {
            params: {
                date: date, // Format: dd-mm-yyyy
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching historical data:", error);
        throw error;
    }
};

// Fonction pour récupérer les informations globales du marché des cryptomonnaies
const getGlobalMarketInfo = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/global`);
        return response.data;
    } catch (error) {
        console.error("Error fetching global market info:", error);
        throw error;
    }
};

// Fonction pour récupérer les nouveaux cryptomonnaies listées
const getNewCoins = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/new`);
        return response.data;
    } catch (error) {
        console.error("Error fetching new coins:", error);
        throw error;
    }
};

// Fonction pour récupérer les tendances du marché
const getTrendingCoins = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/search/trending`);
        return response.data;
    } catch (error) {
        console.error("Error fetching trending coins:", error);
        throw error;
    }
};

// Fonction pour récupérer les informations d'une cryptomonnaie spécifique
const getCoinInfo = async (tokenId) => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/${tokenId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching coin info:", error);
        throw error;
    }
};

export default {
    getMarketData,
    getTokenPrice,
    getMarketInfo,
    getWalletBalances,
    getCoinList,
    getHistoricalData,
    getGlobalMarketInfo,
    getNewCoins,
    getTrendingCoins,
    getCoinInfo,
};
