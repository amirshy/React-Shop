import React from "react";
import { Link } from "react-router-dom";
import useStorageCart from "../../hook/useStorageCart";
import { useContext } from "react";
import ItemCartContext from "../../ItemCartContext.jsx";

function ProductCard(props) {
    let addToCart = useStorageCart(props);
    const authUser = useContext(ItemCartContext);

    return (
        <div className="p-7 border-2 border-gray-200 shadow-md dark:border-gray-800 rounded-md">
            <img
                src={props.poster}
                alt="posterProduct"
                title="posterProduct"
                className="rounded-md"
            />
            <h3 className="text-xl py-2">{props.title}</h3>
            <div className="flex items-center gap-2 mb-4 ">
                <p className="text-sm text-gray-500">
                    {props.description.substring(0, 20)} ...
                </p>
                <Link className="text-xs " to={`/product/${props.id}`}>
                    Read More
                </Link>
            </div>

            <span className="px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 my-4 rounded-full">
                {props.category}
            </span>

            <div className="mt-8 flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <span className="dark:text-gray-600 text-gray-500 text-xs">
                        Price
                    </span>
                    <span className="text-md">$ {props.price}</span>
                </div>
                {authUser.hastAuth ? (
                    <button
                        onClick={addToCart}
                        className="bg-red-500 py-2.5 px-8 !text-white transition-all delay-150 duration-300 hover:bg-red-600 rounded-md "
                    >
                        Add To Cart
                    </button>
                ) : (
                    <Link
                        to="/login"
                        onClick={addToCart}
                        className="bg-red-500 py-2.5 px-8 !text-white transition-all delay-150 duration-300 hover:bg-red-600 rounded-md "
                    >
                        Add To Cart
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
