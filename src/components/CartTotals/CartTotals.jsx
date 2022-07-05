import React from 'react';
import classes from './CartTotals.module.scss';

const CartTotals = ({cartProducts, config}) => {
    const getItemsTotal = () => {
        const itemsTotal = cartProducts.reduce((acc, current) => {
            return acc + current.product.price * current.quantity
        }, 0)

        return parseFloat(itemsTotal).toFixed(2)
    }

    const getDelivery = () => (cartProducts.length < 2 ? 10 : 5).toFixed(2);
    const getTax = () => (getItemsTotal() * 0.01).toFixed(2);
    const getCartTotal = () => (parseFloat(getItemsTotal()) + parseFloat(getDelivery()) + parseFloat(getTax())).toFixed(2)

    return (
        <div className={classes.cart_totals}>
            <div className={classes.cart_totals_normal}>
                Item total: <span>{config.currency}{getItemsTotal()}</span>
            </div>
            <div className={classes.cart_totals_normal}>
                Delivery Charge: <span>{config.currency}{getDelivery()}</span>
            </div>
            <div className={classes.cart_totals_normal}>
                Tax: <span>{config.currency}{getTax()}</span>
            </div>
            <div className={classes.cart_totals_title}>
                Total: <span>{config.currency}{getCartTotal()}</span>
            </div>
        </div>
    );
};

export default CartTotals;