import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

import { useContext } from "react";
import ItemCartContext from "../../ItemCartContext.jsx";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [showPasword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const hasItemCart = useContext(ItemCartContext);
    let navigate = useNavigate();

    const AuthUser = () => {
        if (userName && password) {
            let user = {
                userName,
                password,
            };

            localStorage.setItem("auth", JSON.stringify(user));
            hasItemCart.setHasAuth(true);
            navigate("/");
        }
    };

    return (
        <div className="dark:bg-gray-800 bg-gray-200 my-16 p-9  border border-gray-500 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] rounded-md mx-auto ">
            <h1 className="text-center text-3xl pb-10">Login</h1>

            <div className="flex items-center gap-2.5 border my-6 border-gray-400 py-1.5 px-3 rounded-md">
                <input
                    type="text"
                    placeholder="UserName"
                    className="w-full h-[35px] outline-0"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <FaRegUser className=" text-2xl" />
            </div>
            <div className="flex items-center gap-2.5 border my-6 border-gray-400 py-1.5 px-3 rounded-md">
                <input
                    type={showPasword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-[35px] outline-0"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!showPasword && (
                    <FaEye
                        className=" text-2xl"
                        onClick={() => setShowPassword((prev) => !prev)}
                    />
                )}
                {showPasword && (
                    <FaEyeSlash
                        className=" text-2xl"
                        onClick={() => setShowPassword((prev) => !prev)}
                    />
                )}
            </div>
            <button
                onClick={AuthUser}
                className="w-[100%] mt-32 rounded-md py-3 flex items-center justify-center hover:bg-red-600 bg-red-500 !text-white transition-all duration-300 delay-100"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
