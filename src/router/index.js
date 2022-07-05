import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

export const routes = [
    {path: '/', element: <Home />},
    {path: '/product/:id', element: <Product />},
    {path: '/cart', element: <Cart />},
    {path: '*', element: <Home />}
]