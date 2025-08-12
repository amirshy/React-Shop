import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCartContext from "../../ItemCartContext";
import { useContext } from "react";

function ProductCard(props) {
    let hasItemCart = useContext(ItemCartContext);
    const addToCart = () => {
        let itemCart = localStorage.getItem("cart");
        let parseItem = JSON.parse(itemCart);

        let hasItem =
            parseItem && parseItem.find((item) => item.id === props.id);

        if (itemCart === null) {
            hasItemCart.setHasItem(true);
            let item = { ...props, countItemCart: 1 };
            let ArrayItem = [item];
            localStorage.setItem("cart", JSON.stringify(ArrayItem));
        } else if (!hasItem) {
            hasItemCart.setHasItem(true);
            let item = { ...props, countItemCart: 1 };
            let ArrayItem = [...parseItem, item];
            localStorage.setItem("cart", JSON.stringify(ArrayItem));
        } else {
            hasItemCart.setHasItem(true);
            let updatedItems = parseItem.map((item) => {
                if (item.id === props.id && item.countItemCart < props.count) {
                    return { ...item, countItemCart: item.countItemCart + 1 };
                }
                return item;
            });

            localStorage.setItem("cart", JSON.stringify(updatedItems));
        }
    };

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
                <button
                    onClick={addToCart}
                    className="bg-red-500 py-2.5 px-8 !text-white transition-all delay-150 duration-300 hover:bg-red-600 rounded-md "
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
