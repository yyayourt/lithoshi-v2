import React, { useState } from "react";
import profilpicture from "../../assets/Dashboard/profilpicture.svg";
import location from "../../assets/Dashboard/location.svg";
import twitter from "../../assets/Dashboard/twitter.svg";
import website from "../../assets/Dashboard/website.svg";
import text from "../../assets/Dashboard/text.svg";
import uploadImage from "../../assets/Dashboard/uploadImage.svg";
import connect from "../../assets/Sidebar/connect.svg";
import leftArrow from "../../assets/Alerts/leftArrow.svg";
import check from "../../assets/Dashboard/check.svg";

function Modal({ onClose }) {
    const [profileImage, setProfileImage] = useState(profilpicture);

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-black bg-opacity-50 fixed inset-0 flex justify-center z-10" onClick={handleBackgroundClick}>
            <div className="h-[1000px] w-[720px] self-center rounded-xl bg-[#1E1E1F]">
                <span className="flex flex-row-reverse text-gray-600 cursor-pointer text-xl pt-5 pr-5" style={{ fontSize: "30px" }} onClick={onClose}>
                    &times;{" "}
                </span>
                <div className="px-20">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white text-[30px] font-semibold pl-[30%]">Edit your profile</h2>
                    </div>
                    <p className="border-b border-[#AEAAB5] text-center pb-2">Edit your picture, name, socials, localisation and wallet address</p>
                    <div className="mt-5 h-full flex flex-col gap-6">
                        <div className="flex gap-8 w-full">
                            <div className="h-[80px] w-[100px]">
                                <img src={profileImage} alt="Profile" className="rounded-full h-[100%] w-[100%] object-cover" />
                            </div>
                            <div className="w-full flex flex-col items-flex-start">
                                <p className="text-white">Edit your profile picture</p>
                                <small className="text-white text-opacity-50">Dimensions recommended 600x600 pixels</small>
                                <button className="flex items-center gap-2 w-[36%] px-4 bg-[#29292B] mt-2 rounded-lg h-[40px] cursor-pointer">
                                    <img src={uploadImage} alt="" />
                                    <label htmlFor="fileInput" id="btnImage" className="cursor-pointer">
                                        Upload image
                                    </label>
                                    <input type="file" id="fileInput" name="fileInput" accept="image/*" required className="hidden" onChange={handleImageChange} />
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium">Name</h3>
                            <div className="flex items-center w-full rounded-md focus:outline-none focus:border-blue-500 mt-2">
                                <p className="flex items-center justify-center bg-[#563AFF] h-[64px] w-[10%] rounded-l-md">
                                    <img src={text} alt="" className="h-[20px]" />
                                </p>
                                <textarea className="w-full px-4 py-2 bg-[#29292B] rounded-lg h-[64px] text-white resize-none"></textarea>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium">Description</h3>
                            <div className="flex items-center w-full rounded-md focus:outline-none focus:border-blue-500 mt-2">
                                <p className="flex items-center justify-center bg-[#563AFF] h-[90px] w-[10%] rounded-l-md">
                                    <img src={text} alt="" className="h-[20px]" />
                                </p>
                                <textarea className="w-full px-4 py-2 bg-[#29292B] rounded-lg h-[90px] text-white resize-none"></textarea>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium">Localisation</h3>
                            <div className="flex items-center w-full rounded-md focus:outline-none focus:border-blue-500 mt-2">
                                <p className="flex items-center justify-center bg-[#563AFF] h-[40px] w-[10%] rounded-l-md">
                                    <img src={location} alt="" className="h-[20px]" />
                                </p>
                                <input type="text" className="w-full px-4 py-2 bg-[#29292B] rounded-lg h-[40px] text-white" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium">Social media</h3>
                            <div className="mb-4 flex items-center w-full rounded-md focus:outline-none focus:border-blue-500 mt-2">
                                <p className="flex items-center justify-center bg-[#563AFF] h-[40px] w-[10%] rounded-l-md">
                                    <img src={twitter} alt="" className="h-[20px]" />
                                </p>
                                <input type="text" placeholder="https://www.twitter.com/username" className="w-full px-4 py-2 bg-[#29292B] rounded-lg h-[40px] text-white" />
                            </div>
                            <div className="flex items-center w-full rounded-md focus:outline-none focus:border-blue-500 mt-2">
                                <p className="flex items-center justify-center bg-[#563AFF] h-[40px] w-[10%] rounded-l-md">
                                    <img src={website} alt="" className="h-[20px]" />
                                </p>
                                <input type="text" placeholder="www.siteinternet.com" className="w-full px-4 py-2 bg-[#29292B] rounded-lg h-[40px] text-white" />
                            </div>
                        </div>

                        <div className="border-b border-[#AEAAB5] pb-[20px]">
                            <h3 className="text-white text-lg font-medium">Wallet Address</h3>
                            <div className="mb-4 flex items-center w-full rounded-md focus:outline-none focus:border-blue-500 mt-2">
                                <p className="flex items-center justify-center bg-[#563AFF] h-[40px] w-[10%] rounded-l-md">
                                    <img src={connect} alt="" className="h-[20px]" />
                                </p>
                                <input type="text" className="w-full px-4 py-2 bg-[#29292B] rounded-lg h-[40px] text-white" />
                            </div>
                        </div>

                        <div className="flex justify-center gap-8">
                            <button className="flex gap-2 items-center bg-[#29292B] text-white px-6 py-2 rounded-lg" onClick={onClose}>
                                <img src={leftArrow} alt="" />
                                Back to profile
                            </button>
                            <button className="flex items-center bg-[#563AFF] gap-2 text-white px-6 py-2 rounded-lg">
                                <img src={check} alt="" />
                                Edit my profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
