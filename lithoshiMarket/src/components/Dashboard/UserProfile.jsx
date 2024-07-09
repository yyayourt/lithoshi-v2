import { useState, useEffect } from "react";
import profilpicture from "../../assets/Dashboard/profilpicture.svg";
import website from "../../assets/Dashboard/website.svg";
import twitter from "../../assets/Dashboard/twitter.svg";
import location from "../../assets/Dashboard/location.svg";
import wallet from "../../assets/Sidebar/connect.svg";
import copy from "../../assets/Dashboard/copy.png";
import createprofil from "../../assets/Dashboard/creatprofil.svg";
import valid from "../../assets/Dashboard/valid.svg";
import Modal from "./modalProfil";

export function getToken() {
    const tokenElement = document.getElementById("adress");
    if (tokenElement) {
        return tokenElement.textContent;
    } else {
        return null; // Retourne null si l'élément n'est pas trouvé
    }
}

function UserProfile() {
    const [showAlert, setShowAlert] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [account, setAccount] = useState(localStorage.getItem("account"));

    const openModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const newAccount = localStorage.getItem("account");
            if (newAccount !== account) {
                setAccount(newAccount);
            }
        };
        const interval = setInterval(handleStorageChange, 1000);
        return () => clearInterval(interval);
    }, [account]);

    const Copied = () => {
        let copyText = document.querySelector("#adress");
        let range = document.createRange();
        range.selectNode(copyText);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            let successful = document.execCommand("copy");
            if (successful) {
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2500);
            }
        } catch (err) {
            console.error("Erreur lors de la copie", err);
        } finally {
            window.getSelection().removeAllRanges();
        }
    };

    return (
        <div className="flex flex-col justify-around mr-10 p-10 w-full h-[300px] justify-center rounded-3xl bg-[#1E1E1F]">
            <div className="flex">
                <img src={profilpicture} className="rounded-full h-[80px]" alt="" />
                <div className="pl-5 self-center">
                    <div className="flex pt-1 gap-3 w-full">
                        <h1 className="pb-1 text-2xl flex">New user</h1>
                        <button className="w-[26px] h-[26px] rounded-full bg-[#563AFF] flex justify-center items-center gap-3">
                            <img src={twitter} alt="" />
                        </button>
                        <button className="w-[26px] h-[26px] rounded-full bg-[#563AFF] flex justify-center items-center gap-3">
                            <img src={website} alt="" />
                        </button>
                    </div>
                    <button className="rounded-lg flex justify-center items-center gap-1">
                        <img src={location} alt="" /> N/A
                    </button>
                    <p className="pl-1 mb-3 flex items-center gap-1">
                        <img src={wallet} alt="" />
                        <small id="adress">{account ? <span>{account}</span> : <span>N/A</span>} </small>
                        <img src={copy} className="pl-2 pb-1 h-[24px] cursor-pointer opacity-50" alt="" onClick={Copied} />
                    </p>
                </div>
            </div>
            <div className="pt-[2%] mb-[2%] text-sm overflow-auto">
                <p>Complete your profil information to access to the features of Litoshi Space</p>
            </div>
            <button className="flex items-center bg-[#563AFF] w-[150px] h-[48px] rounded-lg justify-center gap-1" onClick={openModal}>
                <img src={createprofil} className="h-[20px]" alt="" />
                Create profil
            </button>
            {/* Alerte personnalisée */}
            <div
                className={`flex items-center custom-alert fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 border-2 border-black rounded-lg z-50 gap-2 transition-opacity duration-300 ease-in-out ${
                    showAlert ? "opacity-100" : "opacity-0"
                }`}
            >
                <img src={valid} alt="Valid" />
                Copied
            </div>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default UserProfile;
