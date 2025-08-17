import React from "react";
import ItemCart from "../../components/ItemCart/ItemCart";
import { useEffect, useState } from "react";
import ItemCartContext from "../../ItemCartContext";
import { useContext } from "react";
import usePdfItemCart from "../../hook/usePdfItemCart";

function Cart() {
    const itemCartPdf = usePdfItemCart();
    const [itemCart, setItemCart] = useState([]);
    const [chaheCount, setChangeCont] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    let hasItemCart = useContext(ItemCartContext);

    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("cart"));
        setItemCart(getItem);

        const getPrice =
            getItem && getItem.map((item) => item.price * item.countItemCart);

        getPrice &&
            setTotalPrice(getPrice.reduce((acc, price) => acc + price, 0));

        getItem.length === 0 && hasItemCart.setHasItem(false);
    }, [chaheCount]);

    const changeCounterItemCart = (id, number) => {
        let updatedItems = itemCart.map((item) => {
            if (item.id === id) {
                return { ...item, countItemCart: number };
            }
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedItems));
        setChangeCont((prev) => !prev);
    };

    const DeletItemCart = (id) => {
        let RemoveItems = itemCart.filter((item) => item.id !== id);

        localStorage.setItem("cart", JSON.stringify(RemoveItems));
        setChangeCont((prev) => !prev);
    };

    return (
        <>
            <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4">
                {itemCart &&
                    itemCart.map((item) => (
                        <ItemCart
                            key={item.id}
                            {...item}
                            changeCounter={(id, number) =>
                                changeCounterItemCart(id, number)
                            }
                            DeletItemCart={(id) => DeletItemCart(id)}
                        />
                    ))}
            </div>

            <div className="ring-gray-800 border border-gray-500 rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto my-4 p-9">
                <div className="text-4xl pb-11 flex items-center justify-between gap-3">
                    <span>TotalPrice :</span>
                    <span>${totalPrice.toLocaleString()}</span>
                </div>
                {totalPrice > 0 ? (
                    <button className="w-[100%] rounded-md py-3 flex items-center justify-center hover:bg-red-600 bg-red-500 !text-white transition-all duration-300 delay-100">
                        Payment
                    </button>
                ) : (
                    <div className="text-center">
                        <span className="text-2xl  text-red-500">
                            No items found
                        </span>
                    </div>
                )}

                {totalPrice > 0 && (
                    <button
                        onClick={itemCartPdf}
                        className="w-[100%] mt-2.5 rounded-md py-3 flex items-center justify-center hover:bg-red-600 bg-red-500 !text-white transition-all duration-300 delay-100"
                    >
                        Receive invoice
                    </button>
                )}
            </div>
        </>
    );
}

export default Cart;
