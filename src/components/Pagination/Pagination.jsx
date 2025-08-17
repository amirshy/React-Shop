import React from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function Pagination({ prevPage, setPage, nextPage, page, lentghBtn }) {
    return (
        <ul className="flex items-center list-none justify-center my-6 gap-3.5">
            <li
                className=" text-4xl rounded-md w-[40px] h-[40px] border border-red-500 flex items-center justify-center transition-all delay-100 duration-300 hover:bg-red-500 hover:!text-white"
                onClick={() => prevPage()}
            >
                <button className="">
                    <IoIosArrowRoundBack />
                </button>
            </li>

            {lentghBtn.map((item) => (
                <li
                    key={item + 1}
                    className={`text-3xl rounded-md w-[40px] h-[40px] flex items-center justify-center transition-all delay-100 duration-300 hover:bg-red-500 hover:!text-white ${
                        page === item + 1 && "bg-red-500 !text-white"
                    }`}
                    onClick={() => setPage(item + 1)}
                >
                    <button className="">{item + 1}</button>
                </li>
            ))}

            <li className="" onClick={() => nextPage()}>
                <button className=" text-4xl rounded-md w-[40px] h-[40px] border border-red-500 flex items-center justify-center transition-all delay-100 duration-300 hover:bg-red-500 hover:!text-white">
                    <IoIosArrowRoundForward />
                </button>
            </li>
        </ul>
    );
}

export default Pagination;
