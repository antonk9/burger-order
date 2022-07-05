import React, { useContext } from 'react';
import CartQtyInput from "../CartQtyInput/CartQtyInput";
import classes from './CartListItem.module.scss'
import { CartContext, ConfigContext } from "../../context";
import { ReactComponent as Close } from '../../assets/images/close.svg';

const CartListItem = ({product, quantity}) => {
    const { cartProducts, setCartProducts } = useContext(CartContext);
    const { config } = useContext(ConfigContext);

    const changeQty = isIncreased => {
        const updatedCartProducts = [...cartProducts].map(addedProduct => {
            if (addedProduct.product.id === product.id) {
                if(isIncreased) {
                    if (addedProduct.quantity < product.availability) {
                        addedProduct.quantity = addedProduct.quantity + 1
                    }
                } else {
                    if (addedProduct.quantity > 1) {
                        addedProduct.quantity = addedProduct.quantity - 1
                    }
                }
            }

            return addedProduct
        })

        setCartProducts(updatedCartProducts)
    }

    const removeItem = productId => {
        setCartProducts([...cartProducts].filter(addedProduct => addedProduct.product.id !== productId))
    }

    return (
        <div className={classes.list_item}>
            <div className={classes.list_item__image}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className={classes.list_item_right}>
                <div className={classes.list_item_top}>
                    <p className={classes.list_item_name}>{product.name}</p>
                    <Close 
                        onClick={() =>removeItem(product.id)} 
                        className={classes.list_item_remove} />
                </div>
                <div className={classes.list_item_bottom}>
                    <CartQtyInput definedQty={quantity} clickEvent={changeQty} />
                    <span>{config.currency}{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default CartListItem;