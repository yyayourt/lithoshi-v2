/* eslint-disable react/prop-types */
import { useState } from "react";
import SecurityManager from "./SecurityManager";

const useUniSat = (setAccount, setBalance, setTokens) => {
    const [connecting, setConnecting] = useState(false);

    const connectWallet = async () => {
        if (window.unisat) {
            try {
                setConnecting(true); // Empêche les requêtes redondantes
                const accounts = await window.unisat.requestAccounts();
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    localStorage.setItem("account", accounts[0]);

                    const balance = await window.unisat.getBalance();
                    console.log("Balance:", balance);
                    setBalance(balance.total); // Mettre à jour l'état de la balance

                    const tokens = await window.unisat.getTokens(); // Appel pour récupérer les tokens
                    console.log("Tokens:", tokens);
                    setTokens(tokens); // Mettre à jour l'état des tokens
                }
            } catch (error) {
                console.error("Erreur lors de la connexion au portefeuille :", error);
            } finally {
                setConnecting(false); // Réactive le bouton après la requête
            }
        } else {
            alert("Veuillez installer UniSat !");
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
        localStorage.removeItem("account"); // Supprimer le compte du localStorage
    };

    return { connectWallet, disconnectWallet, connecting };
};

const UniSatManager = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [tokens, setTokens] = useState([]);
    const { connectWallet, disconnectWallet, connecting } = useUniSat(setAccount, setBalance, setTokens);

    return (
        <>
            <SecurityManager disconnectWallet={disconnectWallet} />
            {children({ account, balance, tokens, connectWallet, disconnectWallet, connecting })}
        </>
    );
};

export default UniSatManager;
