import React from "react";
import { Link } from "react-router-dom";

function SendEmail() {
    return (
        <div className="flex items-center flex-col my-20 p-12 dark:bg-gray-800 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] bg-gray-200 mx-auto rounded-md">
            <h3 className="text-center text-lg pb-3.5">
                Powering your business
            </h3>
            <p className="text-center min-w-48 pb-10 dark:text-gray-400 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit nemo
                expedita voluptas culpa sapiente.
            </p>
            <div className="flex items-center gap-2.5">
                <input
                    type="text"
                    placeholder="Your Email"
                    className="h-12 border-b-2 w-3/4 border-b-gray-500 px-2"
                />
                <Link
                    to="/"
                    className="!text-white flex items-center justify-center w-44 h-12  bg-red-500 transition-all delay-100 duration-250 hover:bg-red-600 font-medium  dark:text-white"
                >
                    Subscrib
                </Link>
            </div>
        </div>
    );
}

export default SendEmail;
