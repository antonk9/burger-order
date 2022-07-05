import React from 'react';
import classes from './CartQtyInput.module.scss';

const CartQtyInput = ({definedQty, clickEvent}) => {
    return (
        <div className={classes.cart_input_qty}>
            <span className={`${classes.qty_changer} ${classes.qty_changer_minus}`} onClick={() => clickEvent(false)}>-</span>
            <span>{definedQty}</span>
            <span className={classes.qty_changer} onClick={() => clickEvent(true)}>+</span>
        </div>
    );
};

export default CartQtyInput;