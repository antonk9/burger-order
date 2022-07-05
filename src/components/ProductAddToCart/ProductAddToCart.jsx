import React from 'react';
import classes from './ProductAddToCart.module.scss';
import { ReactComponent as Cart } from '../../assets/images/cart.svg';

const ProductAddToCart = ({clickEvent}) => {
    return (
        <div className={classes.add_to_cart} onClick={clickEvent}>
            <Cart fill="#C8161D" stroke="#FFF" />
            <span>Add to cart</span>
        </div>
    );
};

export default ProductAddToCart;