import Home from "pages/Home";
import Product from "pages/Product";
import Cart from "pages/Cart";
import Admin from "pages/Admin";
import Registration from "pages/Registration";
import Login from "pages/Login";

export const routes = [
    {path: '/', element: <Home />},
    {path: '/product/:id', element: <Product />},
    {path: '/cart', element: <Cart />},
    {path: '/admin', element: <Admin />},
    {path: '/registration', element: <Registration />},
    {path: '/login', element: <Login />},
    {path: '*', element: <Home />}
]