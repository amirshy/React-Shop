import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ItemCartContext from "../ItemCartContext";
import { useContext } from "react";

const usePdfItemCart = () => {
    let hasItemCart = useContext(ItemCartContext);
    const handleDownload = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("سبد خرید خالی است!");
            return;
        }

        const doc = new jsPDF();

        //لوگو
        doc.addImage("/public/Logo-Asli (2).png", "PNG", 15, 10, 20, 20);

        // عنوان فروشگاه
        doc.setFontSize(18);
        doc.text("Shop Land", 105, 25, { align: "center" });

        // آماده کردن دیتا برای جدول
        let totalPrice = 0;
        let totalQuantity = 0;
        let discountAmountNum = hasItemCart.discountAmount;
        const rows = cart.map((item, index) => {
            const itemTotal = item.price * item.countItemCart;
            totalPrice += itemTotal;
            totalQuantity += item.countItemCart;

            return [
                index + 1,
                item.title,
                item.countItemCart,
                item.price,
                itemTotal,
            ];
        });

        // جدول محصولات
        autoTable(doc, {
            startY: 50,
            head: [["#", " Name ", " Count ", "Unit Price", "Total Price"]],
            body: rows,
        });

        // جمع کل
        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 10,
            body: [
                [
                    "",
                    `Count :${totalQuantity}`,
                    `discoundAmount : ${
                        discountAmountNum ? discountAmountNum : 0
                    } %`,
                    `Total:$${
                        totalPrice - totalPrice * (discountAmountNum / 100)
                    }`,
                ],
            ],
            styles: { fontStyle: "bold" },
        });

        // دانلود
        doc.save("invoice.pdf");
    };
    return handleDownload;
};

export default usePdfItemCart;
