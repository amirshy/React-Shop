import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-[80%] mx-auto  h-[calc(100vh-79px)] flex items-center justify-center flex-col">
            <h1 className=" lg:text-7xl text-4xl sm:text-5xl font-extrabold text-center pb-8 ">
                Make your Outfit{" "}
                <span className="bg-gradient-to-r from-red-700 via-red-500  to-red-400 bg-clip-text text-transparent">
                    wonderful
                </span>
            </h1>
            <p className=" text-center mt-6 md:text-lg text-sm py-2.5">
                Elevate your style by mixing colors and textures, and don’t
                forget to accessorize! Confidence is key—wear your outfit with
                pride to truly shine.
            </p>
            <div className="flex items-center justify-center gap-5 mt-10 ">
                <Link
                    to="/products/all"
                    className="!text-white flex items-center justify-center w-44 h-12 rounded-md bg-red-500 transition-all delay-100 duration-250 hover:bg-red-600 font-medium  dark:text-white"
                >
                    Start Shopping
                </Link>
                <Link
                    to="/about"
                    className=" text-black  flex items-center justify-center w-44 h-12 rounded-md dark:text-white dark:bg-gray-700 transition-all delay-100 duration-250 dark:hover:bg-gray-800 hover:bg-gray-300  bg-gray-200 font-medium "
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Header;
