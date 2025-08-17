import React from "react";
import ItemCart from "../../components/ItemCart/ItemCart";
import { useEffect, useState } from "react";
import ItemCartContext from "../../ItemCartContext";
import { useContext } from "react";
import usePdfItemCart from "../../hook/usePdfItemCart";

function Cart() {
    const codeDiscount = "code50";
    const itemCartPdf = usePdfItemCart();
    const [itemCart, setItemCart] = useState([]);
    const [chaheCount, setChangeCont] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [inputDiscount, setInputDiscount] = useState("");
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

    const checkDiscount = () => {
        if (codeDiscount === inputDiscount) {
            hasItemCart.setDiscountAmount(40);
            setInputDiscount("");
        }
    };

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
            <div className="flex items-start flex-col lg:flex-row gap-2.5">
                <div className="ring-gray-800 border border-gray-500 rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto lg:mr-0 my-4 p-9">
                    {hasItemCart.discountAmount ? (
                        <div>
                            <div className="border-b border-gray-500">
                                <div className="text-xl pb-7 flex items-center justify-between gap-3">
                                    <span>Price :</span>
                                    <span>${totalPrice.toLocaleString()}</span>
                                </div>
                                <div className="text-xl pb-7 flex items-center justify-between gap-3">
                                    <span>Discount Price :</span>
                                    <span>
                                        $
                                        {(
                                            totalPrice *
                                            (hasItemCart.discountAmount / 100)
                                        ).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <div className="text-3xl pb-11 pt-7 flex items-center justify-between gap-3">
                                <span>TotalPrice :</span>
                                <span>
                                    $
                                    {(
                                        totalPrice -
                                        totalPrice *
                                            (hasItemCart.discountAmount / 100)
                                    ).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-3xl pb-11 pt-7 flex items-center justify-between gap-3">
                            <span>TotalPrice :</span>
                            <span>${totalPrice.toLocaleString()}</span>
                        </div>
                    )}
                    {/* {hasItemCart.discountAmount && <span>hasItemCart</span>} */}
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
                <div className="ring-gray-800 sticky top-24 border border-gray-500 rounded-md w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto lg:ml-0 my-4 p-9">
                    <div>
                        <label htmlFor="discountCode">
                            Discount Cod :{" "}
                            <span className="text-gray-400 text-sm">
                                (code50)
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="code50"
                            className="w-full h-[35px] outline-0 border border-gray-500 rounded-md px-2 mt-2.5"
                            id="discountCode"
                            value={inputDiscount}
                            onChange={(e) => setInputDiscount(e.target.value)}
                        />
                        <input type="text" />
                    </div>
                    <button
                        onClick={checkDiscount}
                        className="w-[100%] mt-2.5 rounded-md py-3 flex items-center justify-center hover:bg-red-600 bg-red-500 !text-white transition-all duration-300 delay-100"
                    >
                        Apply Discount
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cart;
