import { useLocation } from "react-router-dom";
import github from "../../assets/Explorer/Git.svg";
import discord from "../../assets/Explorer/Discord.svg";
import twitter from "../../assets/Explorer/twitter.svg";
import globalsearch from "../../assets/Explorer/global.svg";
import trade from "../../assets/Explorer/Trade.svg";
import star from "../../assets/Explorer/star.svg";
import notification from "../../assets/Explorer/notification.svg";
import unilit from "../../assets/Explorer/unilit.svg";
import Chart from "./chart";

function TokenDetail() {
    const location = useLocation();
    const { token } = location.state || {};

    return (
        <>
            <div className="flex direction-row w-full">
                <div className="w-[70%]">
                    <Chart />
                </div>
                <div className="w-[30%] pl-[5%] mr-[5%] pb-[15px] pr-[5%] h-max bg-[#1E1E1F] rounded-lg overflow-y-hidden ">
                    <h1 className="pt-[5%] font-display">{token.ticker + " / " + token.ticker}</h1>
                    <div className="border  border-[#FFFFFF] border-opacity-20 mt-[1%]"></div>

                    <div className="flex justify-between mt-[3%]">
                        <button className="border border-[#FFFFFF] border-opacity-20 rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src={discord} />
                        </button>
                        <button className="border  border-[#FFFFFF] border-opacity-20 rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src={twitter} />
                        </button>
                        <button className="border  border-[#FFFFFF] border-opacity-20 rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src={github} />
                        </button>
                        <button className="border  border-[#FFFFFF] border-opacity-20 rounded-lg px-4 py-2 flex justify-center items-center">
                            <img src={globalsearch} />
                        </button>
                    </div>

                    <div className="flex justify-between mt-[3%]">
                        <div className="border  border-[#FFFFFF] border-opacity-20 rounded-lg pl-[2%] w-full pr-[8%] py-[2%] mr-[2%]">
                            <small className="text-[#F28E13] font-display text-opacity-60">Price USD</small>
                            <p className={token.price ? "text-white-500" : "text-gray-500 font-display"}>{token.price ? "$" + Math.round(token.price * 10000) / 10000 : "N/A"}</p>
                        </div>
                        <div className="border  border-[#FFFFFF] border-opacity-20 rounded-lg pl-[2%] w-full pr-[8%] py-[2%] ml-[2%]">
                            <small className="text-[#F28E13]  font-display text-opacity-60">Marketcap</small>
                            <p className={token.marketcap ? "text-white-500 font-display" : "text-gray-500 font-display"}>{token.marketcap ? "$" + Math.round(token.marketcap) + "M" : "N/A"}</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-[3%]">
                        <div className="border border-[#FFFFFF] border-opacity-20 rounded-lg pl-[2%] w-full pr-[8%] py-[2%]">
                            <small className="text-[#F28E13] font-display text-opacity-60">5M</small>
                            <p className="font-display">-X%</p>
                        </div>
                        <div className="border  border-[#FFFFFF] border-opacity-20 rounded-lg pl-[2%] w-full pr-[8%] py-[2%] mx-[4%]">
                            <small className="text-[#F28E13] font-display text-opacity-60">1H</small>
                            <p className="font-display">-X%</p>
                        </div>
                        <div className="border  border-[#FFFFFF] border-opacity-20 rounded-lg pl-[2%] w-full pr-[8%] py-[2%]">
                            <small className="text-[#F28E13] font-display text-opacity-60">24H</small>
                            <p className={token.change_24h ? (token.change_24h >= 0 ? "text-green-500 font-display" : "text-red-500 font-display") : "text-gray-500 font-display"}>
                                {token.change_24h ? (parseFloat(token.change_24h) >= 0 ? "+" : "") + parseFloat(token.change_24h).toFixed(2) + "%" : "N/A"}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-[3%]">
                        <div className="border  border-[#FFFFFF] border-opacity-20 rounded-lg pl-[2%] w-full pr-[8%] py-[2%]">
                            <small className="text-[#F28E13] text-opacity-60 font-display">Holders</small>
                            <p className={token.holder_cnt ? "text-white-500" : "text-gray-500 font-display"}>{token.holder_cnt ? "?" + token.holder_cnt : "N/A"}</p>
                        </div>
                    </div>

                    <div className="border  border-[#FFFFFF] border-opacity-20 rounded-lg px-[5%] w-full py-[2%] mt-[3%]">
                        <div className="flex justify-between"></div>

                        <div className="flex justify-between pt-[2%]">
                            <div>
                                <small className="text-[#F28E13] text-opacity-60 font-display">TXNS</small>
                                <p className={token.tx_count ? "text-white-500" : "text-gray-500 font-display"}>{token.tx_count ? "?" + token.tx_count : "N/A"}</p>
                            </div>
                            <div className="text-end">
                                <small className="text-[#F28E13] text-opacity-60 font-display">Volume</small>
                                <p className="font-display">$2.50M</p>
                            </div>
                        </div>

                        <div className="flex justify-between pt-[2%]">
                            <div>
                                <small className="text-[#F28E13] text-opacity-60 font-display">Buys</small>
                                <p className="font-display">2.50</p>
                            </div>
                            <div className="text-end">
                                <small className="text-[#F28E13] text-opacity-60 font-display">SELLS</small>
                                <p className="font-display">2.50</p>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="border w-[50%] py-[0.5%] border-green-500 bg-green-500"></div>
                            <div className="border w-[50%] py-[0.5%] border-red-500 bg-red-500"></div>
                        </div>

                        <div className="flex justify-between pt-[2%]">
                            <div>
                                <small className="text-[#F28E13] text-opacity-60 font-display">BUY VOL</small>
                                <p className="font-display">$2.50M</p>
                            </div>
                            <div className="text-end">
                                <small className="text-[#F28E13] text-opacity-60 font-display">SELL VOL</small>
                                <p className="font-display">$2.50M</p>
                            </div>
                        </div>

                        <div className="flex justify-between pb-[5%]">
                            <div className="border w-[50%] py-[0.5%] border-green-500 bg-green-500"></div>
                            <div className="border w-[50%] py-[0.5%] border-red-500 bg-red-500"></div>
                        </div>
                    </div>

                    <div className="flex justify-between pt-[2%]">
                        <div className="flex flex-col w-full items-center gap-2">
                            <div className="flex  flex-col w-full items-center gap-2">
                                <button className="text-center  font-display border  border-[#FFFFFF] border-opacity-20 rounded-lg w-full py-[2%] mt-[1%] bg-white bg-opacity-10 flex justify-center items-center gap-[10px]">
                                    <img src={star} alt="" />
                                    Watchlist
                                </button>
                                <button className="text-center border font-display border-[#FFFFFF] border-opacity-20 rounded-lg w-full py-[2%] mt-[1%] bg-white bg-opacity-10 flex justify-center items-center gap-[10px]">
                                    <img src={notification} alt="" />
                                    Alerts
                                </button>
                            </div>
                            <button className="text-center border font-display border-[#FFFFFF] border-opacity-20 rounded-lg w-full py-[2%] mt-[1%] bg-white bg-opacity-10 flex justify-center items-center gap-[10px]">
                                <img src={unilit} alt="" />
                                Trade on unilit
                            </button>
                        </div>
                    </div>

                    <div className="border  border-[#FFFFFF] border-opacity-20 mt-[3%]"></div>
                    <div className="flex justify-between font-display pt-[2%]">
                        <p>Token created</p>
                        <p>9 mounth ago</p>
                    </div>
                    <div className="border  border-[#FFFFFF] border-opacity-20 mt-[2%]"></div>

                    <div className="flex border  border-[#FFFFFF] border-opacity-20 rounded justify-between mt-[3%] h-[60px] pl-[2%]">
                        <input type="text" className="w-full bg-[#1E1E1F] focus:outline-none focus:border-transparent" />
                        <div className="border  border-[#FFFFFF] border-opacity-20"></div>
                        <button className="ml-[2%] font-display mr-[3%]">$LITE</button>
                    </div>

                    <div className="justify-items-center mt-[3%] mb-[5%] flex justify-center items-center w-full">
                        <button className="text-center flex justify-center items-center w-[%10] bg-red">
                            <img src={trade} alt="" />
                        </button>
                    </div>

                    <div className="flex border border-[#FFFFFF] border-opacity-20 rounded justify-between mt-[3%] h-[60px] pl-[2%]">
                        <input type="text" className="w-full bg-[#1E1E1F] focus:outline-none focus:border-transparent" />
                        <div className="border  border-[#FFFFFF] border-opacity-20"></div>
                        <button className="ml-[2%] font-display mr-[3%]">USD</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TokenDetail;
