import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";
import usePagination from "../../hook/usePagination";
import { ProductData } from "../../Data";
import Pagination from "../../components/Pagination/Pagination";
function Products() {
    const params = useParams();
    const [search, setSearch] = useState("");
    const [itemPage, lentghBtn, page, setPage, prevPage, nextPage, setAllItem] =
        usePagination();

    useEffect(() => {
        if (params.id === "all") {
            setAllItem(
                ProductData.filter((item) =>
                    item.title
                        .trim()
                        .toLowerCase()
                        .includes(search.trim().toLowerCase())
                )
            );
        } else {
            setAllItem(
                ProductData.filter(
                    (item) =>
                        item.category === params.id &&
                        item.title
                            .trim()
                            .toLowerCase()
                            .includes(search.trim().toLowerCase())
                )
            );
        }
    }, [params, search]);

    return (
        <div className=" mt-10 w-[85%] mx-auto">
            <div className="flex items-center gap-2.5 py-1.5 px-2.5 mb-2 border-2 border-gray-500 w-[90%] sm:w-[60%] lg:w-[40%] rounded-md">
                <IoIosSearch className=" text-red-500 pt-1 text-2xl" />
                <input
                    type="text"
                    placeholder="Search ..."
                    className="w-full outline-0 border-0"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-3.5 mt-8 mb-5 justify-between">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 flex-3/4">
                        {itemPage.map((item) => (
                            <ProductCard {...item} key={item.price} />
                        ))}
                    </div>
                    <Pagination
                        prevPage={prevPage}
                        nextPage={nextPage}
                        lentghBtn={lentghBtn}
                        page={page}
                        setPage={setPage}
                    />
                </div>
                <div>
                    <CategoryProduct params={params} />
                </div>
            </div>
        </div>
    );
}

export default Products;
