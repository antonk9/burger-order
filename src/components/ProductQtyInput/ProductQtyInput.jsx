import React from 'react';
import classes from './ProductQtyInput.module.scss'

const ProductQtyInput = ({productQty, clickEvent}) => {
    
    return (
        <div className={classes.product_input_qty}>
            <span className={classes.qty_changer} onClick={() => clickEvent(false)}>-</span>
            <span>{productQty}</span>
            <span className={classes.qty_changer} onClick={() => clickEvent(true)}>+</span>
        </div>
    );
};

export default ProductQtyInput;