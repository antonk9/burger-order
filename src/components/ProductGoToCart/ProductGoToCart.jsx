import React, { memo } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "assets/images/cart.svg";


const ProductGoToCart = () => {
    return (
        <>
            <Link to="/cart" className="product-to-cart">
                <Cart fill="#C8161D" stroke="#FFF" />
                <span>Go to Cart</span>
            </Link>
        </>
    );
};

export default memo(ProductGoToCart);