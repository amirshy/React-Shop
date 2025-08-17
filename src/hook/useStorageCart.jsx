import React from "react";
import ItemCartContext from "../ItemCartContext";
import { useContext } from "react";

const useStorageCart = (props) => {
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
    return addToCart;
};

export default useStorageCart;
