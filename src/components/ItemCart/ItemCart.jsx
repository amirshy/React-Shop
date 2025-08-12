import React from "react";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function ItemCart(props) {
    const [countProduct, setCountProduct] = useState(props.countItemCart);
    return (
        <div className="flex items-center flex-col sm:flex-row justify-between p-7 w-[100%] mx-auto my-5 dark:bg-gray-800 bg-gray-100  border border-gray-600 rounded-lg">
            <div className="flex  flex-col sm:flex-row gap-7">
                <img
                    src={props.poster}
                    alt="poster"
                    title="poster"
                    className="w-[200px] h-[200px] rounded-md"
                />
                <div className="flex flex-col justify-between">
                    <Link to={`/product/${props.id}`} className="text-2xl pb-5">
                        {props.title}
                    </Link>
                    <div>
                        {props.count <= countProduct && (
                            <span className="text-red-500 py-1.5">
                                More than the quantity in stock
                            </span>
                        )}
                        <div className="flex items-center gap-4 pt-2.5 pb-6">
                            <span>Count :</span>
                            {props.count > countProduct && (
                                <button
                                    onClick={() => {
                                        setCountProduct((prev) => {
                                            const newCount = prev + 1;
                                            props.changeCounter(
                                                props.id,
                                                newCount
                                            );
                                            return newCount;
                                        });
                                    }}
                                    className="w-[30px] h-[30px] border dark:bg-gray-600 bg-gray-200 border-gray-400 flex items-center justify-center  rounded-md"
                                >
                                    <FaPlus />
                                </button>
                            )}
                            <span>{countProduct}</span>
                            {countProduct > 1 && (
                                <button
                                    className="w-[30px] h-[30px] border dark:bg-gray-600 bg-gray-200 border-gray-400 flex items-center justify-center  rounded-md"
                                    onClick={() => {
                                        setCountProduct((prev) => {
                                            const newCount = prev - 1;
                                            props.changeCounter(
                                                props.id,
                                                newCount
                                            );
                                            return newCount;
                                        });
                                    }}
                                >
                                    <TiMinus />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-2.5 pb-4">
                            <span className="text-gray-500">Price :</span>
                            <span>${props.price * props.countItemCart}</span>
                        </div>
                    </div>
                </div>
            </div>
            <FaTrashAlt
                onClick={() => props.DeletItemCart(props.id)}
                className="text-2xl  text-red-500 transition-all delay-150 duration-300 hover:text-red-600"
            />
        </div>
    );
}

export default ItemCart;
