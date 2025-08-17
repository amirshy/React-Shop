import Index from "./Page/Index/Index";
import About from "./Page/About/About";
import Products from "./Page/Products/Products";
import Login from "./Page/Login/Login";
import Product from "./Page/Product/Product";
import Cart from "./Page/Cart/Cart";
import SignUp from "./Page/SignUp/SignUp";

const route = [
    { path: "/", element: <Index /> },
    { path: "/about", element: <About /> },
    { path: "/products/:id", element: <Products /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/login", element: <Login /> },
    { path: "/cart", element: <Cart /> },
    { path: "/signUp", element: <SignUp /> },
];
export default route;
