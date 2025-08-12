import React, { useEffect } from "react";
import useTheme from "../../hook/useDarkMode";
import { useState } from "react";
import SelectThem from "../SelectThem/SelectThem.jsx";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { useContext } from "react";
import ItemCartContext from "../../ItemCartContext.jsx";
import { RiLogoutBoxLine } from "react-icons/ri";
let Navbar = () => {
    const [theme, setTheme] = useTheme();
    const [openSidbar, setOpenSidbar] = useState(false);
    const hasItemCart = useContext(ItemCartContext);
    const [selected, setSelected] = useState("home");

    useEffect(() => {
        let itemCart = localStorage.getItem("cart");
        itemCart && hasItemCart.setHasItem((prev) => !prev);
    }, []);

    const logOutUser = () => {
        localStorage.removeItem("auth");
        hasItemCart.setHasAuth(false);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src={
                            theme === "light"
                                ? "/Logo-Asli (2).png"
                                : "/Group 6.png"
                        }
                        className="h-11"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
                        ShopLand
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {!hasItemCart.hastAuth && (
                        <Link
                            to="/login"
                            className="mr-1.5 bg-gray-100 dark:bg-gray-600 w-9 h-9 rounded-md flex items-center justify-center text-xl"
                        >
                            <RiLoginBoxLine />
                        </Link>
                    )}
                    {hasItemCart.hastAuth && (
                        <Link
                            onClick={logOutUser}
                            to="/"
                            className="mr-1.5 bg-gray-100 dark:bg-gray-600 w-9 h-9 rounded-md flex items-center justify-center text-xl"
                        >
                            <RiLogoutBoxLine />
                        </Link>
                    )}

                    <Link
                        to="/cart"
                        className="relative mr-1.5 bg-gray-100 dark:bg-gray-600 w-9 h-9 rounded-md flex items-center justify-center text-xl"
                    >
                        <FaBagShopping />
                        {hasItemCart.hasItem && (
                            <div className="absolute  w-1.5 h-1.5 right-1 top-1 bg-red-500 rounded-full"></div>
                        )}
                    </Link>

                    <SelectThem theme={theme} setTheme={setTheme} />
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={() => setOpenSidbar((prev) => !prev)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between transition delay-150 duration-300 ease-in-out w-full md:flex md:w-auto md:order-1 ${
                        !openSidbar ? "hidden" : ""
                    }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                onClick={() => setSelected("home")}
                                to="/"
                                className="block py-2 px-3 text-black dark:text-white rounded-sm md:bg-transparent   "
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setSelected("product")}
                                to="/products/all"
                                className="block py-2 px-3 text-black dark:text-white rounded-sm md:bg-transparent  "
                            >
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setSelected("about")}
                                to="/about"
                                className="block py-2 px-3 text-black dark:text-white rounded-sm md:bg-transparent "
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
