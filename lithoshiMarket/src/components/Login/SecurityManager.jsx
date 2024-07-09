// SecurityManager.js
import { useEffect } from "react";

const useSecurity = (disconnectWallet) => {
    useEffect(() => {
        const INACTIVITY_TIMEOUT = 3600000; // 1 heure en millisecondes
        let inactivityTimer;

        const resetInactivityTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                disconnectWallet();
            }, INACTIVITY_TIMEOUT);
        };

        const handleWindowUnload = () => {
            disconnectWallet();
        };

        const handleStorageChange = async () => {
            if (window.unisat) {
                const accounts = await window.unisat.requestAccounts();
                if (accounts.length === 0) {
                    disconnectWallet();
                }
            }
        };

        window.addEventListener("beforeunload", handleWindowUnload);
        const events = ["mousemove", "keydown", "scroll", "click"];
        events.forEach((event) => window.addEventListener(event, resetInactivityTimer));
        const storageInterval = setInterval(handleStorageChange, 10000); // Vérifier toutes les 10 secondes

        return () => {
            window.removeEventListener("beforeunload", handleWindowUnload);
            events.forEach((event) => window.removeEventListener(event, resetInactivityTimer));
            clearInterval(storageInterval);
        };
    }, [disconnectWallet]);
};

const SecurityManager = ({ disconnectWallet }) => {
    useSecurity(disconnectWallet);
    return null;
};

export default SecurityManager;
