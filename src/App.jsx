import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import route from "./route";
import Footer from "./components/Footer/Footer";
import ItemCartContext from "./ItemCartContext";
import { useState } from "react";

function App() {
    const getRoute = useRoutes(route);
    let [hasItem, setHasItem] = useState(false);
    let [hastAuth, setHasAuth] = useState(false);
    return (
        <ItemCartContext.Provider
            value={{ hasItem, setHasItem, hastAuth, setHasAuth }}
        >
            <div className="min-h-screen scroll-smooth bg-white dark:bg-gray-900 text-black dark:text-white ">
                <div>
                    <Navbar />
                    <ScrollToTop>
                        <div>{getRoute}</div>
                    </ScrollToTop>
                    <Footer />
                </div>
            </div>
        </ItemCartContext.Provider>
    );
}

export default App;
