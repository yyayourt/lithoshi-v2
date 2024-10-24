import UnisatManager from "./UnisatManager";
import logoUnisat from "../../assets/Sidebar/logoMeta.svg";

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
                    <div className="bg-[#1E1E1F] rounded-2xl p-6 w-96 shadow-md w-[500px] h-[300px]">
                        <span className="flex flex-row-reverse text-gray-600 cursor-pointer text-xl" style={{ fontSize: "30px" }} onClick={onClose}>
                            &times;{" "}
                        </span>
                        <h2 className="text-[30px] font-semibold text-center">Connect wallet</h2>
                        <p className="text-center mb-8">Connect your wallet to sign in</p>
                        <div className="flex items-center justify-center">
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
                                <button onClick={connectWallet} className="flex items-center bg-[#563AFF] rounded-xl gap-3 w-[400px] h-[80px]">
                                    <img src={logoUnisat} alt="" />
                                    <span className="flex flex-col items-start">
                                        <h3 className="font-semibold">unisat</h3>
                                        Connecter le portefeuille Unisat
                                    </span>
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
