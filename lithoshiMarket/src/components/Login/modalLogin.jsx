import UnisatManager from "./UnisatManager";
import logoUnisat from "../../assets/Sidebar/logo_unisat.svg";

// eslint-disable-next-line react/prop-types
function Modal({ onClose }) {
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <UnisatManager>
            {({ account, balance, tokens, connectWallet, disconnectWallet }) => (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleBackgroundClick}>
                    <div className="bg-[#1E1E1F] rounded-2xl p-6 w-96 shadow-md">
                        <span className="flex flex-row-reverse text-gray-600 cursor-pointer text-xl" style={{ fontSize: "30px" }} onClick={onClose}>
                            &times;{" "}
                        </span>
                        <h2 className="text-[30px] font-semibold pl-[20%]">Connect wallet</h2>
                        <p>Connect your wallet to sign in</p>

                        <div>
                            {account ? (
                                <div>
                                    <p>Connecté : {account}</p>
                                    {balance !== null && <p>Balance: {balance / 100000000} BTC</p>}
                                    {tokens.length > 0 && (
                                        <div>
                                            <p>Tokens :</p>
                                            <ul>
                                                {tokens.map((token, index) => (
                                                    <li key={index}>
                                                        {token.name}: {token.amount}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <button onClick={disconnectWallet}>Déconnecter le portefeuille</button>
                                </div>
                            ) : (
                                <button onClick={connectWallet}>
                                    <img src={logoUnisat} alt="" />
                                    Connecter le portefeuille Unisat
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </UnisatManager>
    );
}

export default Modal;
