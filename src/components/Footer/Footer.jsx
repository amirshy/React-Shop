import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="w-[85%] mx-auto border-y-2 border-gray-500 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-row xl:justify-between flex flex-col gap-[3rem]  py-12">
                <h4>Terms · Privacy Policy</h4>
                <ul className="list-none flex items-start flex-col ">
                    <li className="text-red-500 mb-3">Products</li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/" className="">
                            Web Studio
                        </Link>
                    </li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">DynamicBox Flex</Link>
                    </li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">Integrations</Link>
                    </li>
                    <li className="transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">Command-line</Link>
                    </li>
                </ul>
                <ul className="list-none flex items-start flex-col ">
                    <li className="text-red-500 mb-3">Resources</li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/" className="">
                            Documentation
                        </Link>
                    </li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">Tutorials & Guides</Link>
                    </li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">Support Center</Link>
                    </li>
                    <li className="transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">Partners</Link>
                    </li>
                </ul>
                <ul className="list-none flex items-start flex-col ">
                    <li className="text-red-500 mb-3">Company</li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/" className="">
                            Home
                        </Link>
                    </li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className=" pb-2.5 transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">Privacy Policy</Link>
                    </li>
                    <li className="transition-all duration-300 delay-150 hover:text-red-500 dark:hover:text-gray-300">
                        <Link to="/">Pricing</Link>
                    </li>
                </ul>
                <ul className="list-none flex items-start flex-col ">
                    <li className="text-red-500 mb-3">Company</li>
                    <li className=" pb-2.5 w-64">
                        Get the latest news and articles to your inbox every
                        month.
                    </li>
                    <li className="flex items-center gap-2.5 pt-9">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="h-8 border-b-2 border-gray-500 w-44 border-0 px-2"
                        />
                        <Link
                            to="/"
                            className="!text-white flex items-center justify-center px-3 h-8  bg-red-500 transition-all delay-100 duration-250 hover:bg-red-600 font-medium  dark:text-white"
                        >
                            Subscrib
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center justify-between w-[80%] mx-auto py-6">
                <p>Make By Amir Izadi ❤</p>
                <a href="https://github.com/amirshy" className="text-2xl ">
                    <FaGithub className="transition-all duration-300 delay-150 hover:text-pink-600" />
                </a>
            </div>
        </>
    );
}

export default Footer;
