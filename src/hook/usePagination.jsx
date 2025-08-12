import React from "react";
import { useState, useEffect } from "react";

function usePagination() {
    const [allItem, setAllItem] = useState([]);
    const [itemPage, setItemPage] = useState([]);
    const [page, setPage] = useState(1);
    const [lentghBtn, setLengthBtn] = useState([1, 2, 3, 4]);
    const [numPage, setNumPage] = useState(9);

    useEffect(() => {
        setLengthBtn(
            Array.from(Array(Math.ceil(allItem.length / numPage)).keys())
        );
        let endItem = page * numPage;
        let startItem = endItem - numPage;
        let spliceitem = allItem.slice(startItem, endItem);
        setItemPage(spliceitem);
        window.scrollTo(0, 0);
    }, [page, allItem]);

    const prevPage = () => {
        if (page !== 1) {
            setPage((prev) => prev - 1);
        }
    };
    const nextPage = () => {
        if (lentghBtn.length > page) {
            setPage((prev) => prev + 1);
        }
    };

    return [itemPage, lentghBtn, page, setPage, prevPage, nextPage, setAllItem];
}

export default usePagination;
