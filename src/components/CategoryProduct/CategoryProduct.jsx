import React from "react";
import { TbCategoryMinus } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CategorysProduct } from "../../Data";
const CategoryProduct = ({ params }) => {
    return (
        <div className="flex-3/12 border-2 border-gray-600 py-5 rounded-md sticky top-20">
            <h2 className="flex items-center gap-2.5 text-xl pl-3 ">
                <TbCategoryMinus className="text-red-500" /> Category
            </h2>

            <ul className="list-none flex flex-col gap-5 mt-8">
                <li
                    className={`text-lg py-1.5 bg-gradient-to-r bg-gray-100 to-gray-50 dark:bg-gray-700 dark:to-gray-900 ${
                        params.id === "all" && "border-l-2 border-red-500"
                    } `}
                >
                    <Link
                        className="w-full py-1.5 pl-3 pr-32"
                        to="/products/all"
                    >
                        all
                    </Link>
                </li>
                {CategorysProduct.map((item) => (
                    <li
                        key={item.id}
                        className={`text-lg py-1.5 bg-gradient-to-r bg-gray-100 to-gray-50 dark:bg-gray-700 dark:to-gray-900 ${
                            params.id === item.title &&
                            "border-l-2 border-red-500"
                        } `}
                    >
                        <Link
                            className="w-full py-1.5  pr-32 pl-3"
                            to={`/products/${item.title}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryProduct;
