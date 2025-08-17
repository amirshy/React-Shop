import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import route from "./route";
import Footer from "./components/Footer/Footer";
import ItemCartContext from "./ItemCartContext";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const getRoute = useRoutes(route);
    let [hasItem, setHasItem] = useState(false);
    let [hastAuth, setHasAuth] = useState(false);
    let [userName, setUserName] = useState("");
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);
    return (
        <ItemCartContext.Provider
            value={{
                hasItem,
                setHasItem,
                hastAuth,
                setHasAuth,
                userName,
                setUserName,
            }}
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
