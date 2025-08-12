import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from "react-router";
import { ProductData } from "../../Data";
import ItemCartContext from "../../ItemCartContext";
import { useContext } from "react";
function Product() {
    const params = useParams();
    const [iamgeAsli, setImageAsli] = useState("1");
    const [data, setData] = useState({});
    const navigate = useNavigate();

    let hasItemCart = useContext(ItemCartContext);
    const addToCart = (data) => {
        let itemCart = localStorage.getItem("cart");
        let parseItem = JSON.parse(itemCart);

        let hasItem =
            parseItem && parseItem.find((item) => item.id === data.id);

        if (itemCart === null) {
            hasItemCart.setHasItem(true);
            let item = { ...data, countItemCart: 1 };
            let ArrayItem = [item];
            localStorage.setItem("cart", JSON.stringify(ArrayItem));
        } else if (!hasItem) {
            hasItemCart.setHasItem(true);
            let item = { ...data, countItemCart: 1 };
            let ArrayItem = [...parseItem, item];
            localStorage.setItem("cart", JSON.stringify(ArrayItem));
        } else {
            hasItemCart.setHasItem(true);
            let updatedItems = parseItem.map((item) => {
                if (item.id === data.id && item.countItemCart < data.count) {
                    return { ...item, countItemCart: item.countItemCart + 1 };
                }
                return item;
            });

            localStorage.setItem("cart", JSON.stringify(updatedItems));
        }
    };

    useEffect(() => {
        const dataProduct = ProductData.find(
            (item) => item.id === Number(params.id)
        );

        setData(dataProduct);
        setImageAsli(dataProduct.poster);
    }, [params]);

    return (
        <div className="dark:bg-gray-950 scroll-smooth relative p-10 w-[90%] mx-auto my-24 border border-gray-200 dark:border-gray-700 rounded-md">
            <span
                onClick={() => navigate(-1)}
                className="absolute top-0 right-4 flex items-center gap-2 px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 my-4 rounded-full"
            >
                <IoIosArrowBack />
                Back
            </span>

            <div className="flex flex-col lg:flex-row  gap-10">
                <div className="flex justify-center flex-col-reverse md:flex-row  gap-4 items-center">
                    <div className="flex md:flex-col  items-center gap-4">
                        {data.image &&
                            data.image.map((item) => (
                                <img
                                    key={item}
                                    src={item}
                                    alt="posterProduct"
                                    title="posterProduct"
                                    className="max-w-[90px] max-h-[90px] rounded-md"
                                    onClick={(e) => setImageAsli(e.target.src)}
                                />
                            ))}
                    </div>
                    <img
                        src={iamgeAsli}
                        alt="posterProduct"
                        title="posterProduct"
                        className="max-w-[200px] max-h-[200px] md:max-w-[350px] md:max-h-[350px] mt-7 lg:mt-0 rounded-md transition-all duration-300 delay-150"
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-medium pb-9 ">
                            {data.title}
                        </h2>
                        <span className="px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 my-4 pb rounded-full">
                            {data.category}
                        </span>
                    </div>
                    <div>
                        <p className="text-md text-gray-500 py-4 ">
                            {data.description}
                        </p>
                        <div className="mt-14 flex items-center justify-between ">
                            <div className="flex flex-col items-start">
                                <span className="dark:text-gray-600 text-gray-500 text-xl">
                                    Price
                                </span>
                                <span className="text-md text-3xl">
                                    $ {data.price}
                                </span>
                            </div>
                            <button
                                onClick={() => addToCart(data)}
                                className="bg-red-500 py-2.5 px-8 !text-white transition-all delay-100 duration-300 hover:bg-red-600 rounded-md "
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
