/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const Dropdown3 = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    let domNode = useClickOutside(() => {
        setDropdownOpen(false);
    });

    return (
        <>
            {/* <!-- ====== Dropdowns Section Start --> */}
            <section className="w-[100%]">
                <div className="container">
                    <div ref={domNode} className="w-full">
                        <div className="    text-center">
                            <div className="relative inline-block text-left w-[100%]">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex items-center justify-between rounded-lg w-full px-4 py-2 bg-[#151516] rounded-md`}>
                                    My BRC
                                    <span className="pl-4">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                                            <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`shadow-1 dark:shadow-box-dark absolute left-0 z-40 w-full rounded-md bg-dark dark:bg-dark-2 py-[10px] transition-all ${
                                        dropdownOpen ? "top-full opacity-100 visible" : "top-[110%] invisible opacity-0"
                                    }`}
                                >
                                    <DropdownItem label="Dashboard" href="/#" />
                                    <DropdownItem label="Preview" href="/#" />
                                    <DropdownItem label="Button" href="/#" />
                                    <DropdownItem label="Subscribe" href="/#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Dropdowns Section End -->    */}
        </>
    );
};

export default Dropdown3;

const DropdownItem = ({ label, href }) => {
    return (
        <a href={href} className="block py-2 px-5 text-base text-dark-5 hover:text-white bg-[#151516] ">
            {label}
        </a>
    );
};
