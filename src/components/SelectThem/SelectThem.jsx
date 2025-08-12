import React, { useState, useEffect, useRef } from "react";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";

let SelectThem = ({ theme, setTheme }) => {
    const [show, setShow] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className="relative">
            <button
                onClick={() => setShow((prev) => !prev)}
                className="bg-gray-100 dark:bg-gray-600 w-9 h-9 rounded-md flex items-center justify-center text-xl"
            >
                {theme === "light" ? (
                    <GoSun />
                ) : theme === "dark" ? (
                    <FaRegMoon />
                ) : (
                    <AiOutlineLaptop />
                )}
            </button>

            {show && (
                <div className="absolute bg-gray-100 top-[3rem] right-[-3.7rem] p-2.5 rounded-md w-[10rem] dark:bg-gray-600 space-y-1.5">
                    <button
                        onClick={() => setTheme("light")}
                        className={`px-4 py-2 w-full rounded hover:bg-blue-500 hover:text-white transition-all ${
                            theme === "light" ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        Light
                    </button>
                    <button
                        onClick={() => setTheme("dark")}
                        className={`px-4 py-2 w-full rounded hover:bg-blue-500 hover:text-white transition-all ${
                            theme === "dark" ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        Dark
                    </button>
                    <button
                        onClick={() => setTheme("system")}
                        className={`px-4 py-2 w-full rounded hover:bg-blue-500 hover:text-white transition-all ${
                            theme === "system" ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        System
                    </button>
                </div>
            )}
        </div>
    );
};

export default SelectThem;
