import React, { useContext } from 'react';
import CartListItems from "../components/CartListItems/CartListItems";
import CartTotals from "../components/CartTotals/CartTotals";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import MyButton from "../components/UI/button/MyButton";
import { CartContext, ConfigContext } from "../context/index";

const Cart = () => {
    const { cartProducts } = useContext(CartContext);
    const { config } = useContext(ConfigContext);

    const isCartEmpty = () => {
        return !cartProducts.length
    }

    return (
        <div className="page-cart">
            <TopNavbar 
                isBackButton={true} 
                isMoreButton={true}
                pageTitle="Cart" />
            <CartListItems {...{cartProducts}} />
            <CartTotals {...{cartProducts}} {...{config}} />
            <div className="cart-order-submit">
                <MyButton theme="dark" isDisabled={isCartEmpty()} >Proceed to payment method</MyButton>
            </div>
        </div>
    );
};

export default Cart;