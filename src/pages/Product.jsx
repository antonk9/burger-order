import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TopNavbar from "../components/TopNavbar/TopNavbar";
import burger1 from "../assets/images/item-burger1.png";
import burger2 from "../assets/images/item-burger2.png";
import IconBox from "../components/IconBox/IconBox";
import ProductQtyInput from "../components/ProductQtyInput/ProductQtyInput";
import ProductAddToCart from "../components/ProductAddToCart/ProductAddToCart";
import { ReactComponent as Cart } from "../assets/images/cart.svg";
import { CartContext } from "../context";

const Product = () => {
    const params = useParams();
    // eslint-disable-next-line
    const { cartProducts, setCartProducts } = useContext(CartContext)

    const items = [
        {
            id: 1,
            name: 'Chipotle Cheesy Chicken',
            price: '12.60',
            image: burger1,
            url: '/product/1',
            description: {
                short: 'Chicken burger',
                full: 'A signature flame-grilled chicken patty topped with smoked beef'
            },
            attributes: [
                {
                    id: '123',
                    title: 'size',
                    variants: ['S', 'M', 'L']
                }
            ],
            availability: 10
        },
        {
            id: 2,
            name: 'Beef burger',
            price: '20.95',
            image: burger2,
            url: '/product/2',
            description: {
                short: 'Beef burger',
                full: 'A signature flame-grilled chicken patty topped with smoked beef'
            },
            attributes: [
                {
                    id: '123',
                    title: 'size',
                    variants: ['S', 'M', 'L']
                }
            ],
            availability: 10
        }
    ]
    // eslint-disable-next-line
    const product = items.find(item => item.id == params.id)
    const [selectedAttribute, setSelectedAttribute] = useState({})
    const [selectedQty, setSelectedQty] = useState(1)

    const setProductAttribute = (attr, variant) => {
        setSelectedAttribute({[attr.title]: variant})
    }

    const doSelectQty = isIncreased => {
        if (isIncreased) {
            if (selectedQty < product.availability) {
                setSelectedQty(selectedQty + 1)
            }
        } else {
            if (selectedQty > 1) {
                setSelectedQty(selectedQty - 1)
            }
        }
    }

    const addToCart = () => {
        const addedProduct = cartProducts.find(addedProduct => product.id === addedProduct.product.id)

        
        if(addedProduct) {
            const productsToAdd = [...cartProducts].map(addedProduct => {
                if(addedProduct.product.id === product.id) {
                    addedProduct.quantity = addedProduct.quantity + selectedQty
                }

                return addedProduct
            })

            setCartProducts(productsToAdd)
        } else {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        'product': product,
                        'variant': selectedAttribute || null,
                        'quantity': selectedQty || 1
                    }
                ],
            )
        }
    }

    return (
        <div className="page-product">
            <TopNavbar 
                isBackButton={true} 
                isFavoriteButton={true} />

            <div className="product-details">
                <div className="product-header">
                    {product.name}
                </div>
                <div className="product-description">
                    {product.description.full}
                </div>
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                {product.attributes.map(attribute => 
                    <div className="attributes" key={attribute.id}>
                        {attribute.variants.map(variant => 
                            <IconBox 
                                size="large" 
                                clickEvent={() => setProductAttribute(attribute, variant)} 
                                key={variant}
                                // eslint-disable-next-line
                                parentClasses={selectedAttribute[attribute.title] == variant ? 'icon-box-selected' : ''}>
                                    {variant}
                            </IconBox> 
                        )}
                    </div>
                )}
                <ProductQtyInput productQty={selectedQty} clickEvent={doSelectQty} />
                <div className="product-cart-actions">
                    <ProductAddToCart clickEvent={addToCart} />
                    <Link to="/cart" className="product-to-cart">
                        <Cart fill="#C8161D" stroke="#FFF" />
                        <span>Go to Cart</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;