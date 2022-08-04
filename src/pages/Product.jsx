import React, { useContext, useState, useEffect, memo} from 'react';
import { useLocation } from 'react-router-dom';
import TopNavbar from "components/TopNavbar/TopNavbar";
import IconBox from "components/IconBox/IconBox";
import ProductQtyInput from "components/ProductQtyInput/ProductQtyInput";
import ProductAddToCart from "components/ProductAddToCart/ProductAddToCart";
import { CartContext } from "context";
import ProductsService from 'API/ProductsService';
import configData from 'config.json';
import { useCallback } from "react";
import ProductGoToCart from "components/ProductGoToCart/ProductGoToCart";

const Product = () => {
    const location = useLocation();
    const { productId } = location.state;
    // eslint-disable-next-line
    const { cartProducts, setCartProducts } = useContext(CartContext)
    const [product, setProduct] = useState([])
    // eslint-disable-next-line
    // const product = items.find(item => item.id == params.id)
    const [selectedAttribute, setSelectedAttribute] = useState({})
    const [selectedQty, setSelectedQty] = useState(1)

    useEffect(() => {
        (async function () {
            const { data } = await ProductsService.getProductById(productId)

            setProduct(data)
        }())
    }, [productId])


    const setProductAttribute = useCallback((attr, variant) => {
        setSelectedAttribute({[attr.title]: variant})
    }, [])
    const MemoizedProductQtyInput = memo(ProductQtyInput)
    const MemoizedProductAddToCart = memo(ProductAddToCart)
    const MemoizedIconBox = memo(IconBox)

    const doSelectQty = useCallback(isIncreased => {
        if (isIncreased) {
            if (selectedQty < product.availability) {
                setSelectedQty(selectedQty + 1)
            }
        } else {
            if (selectedQty > 1) {
                setSelectedQty(selectedQty - 1)
            }
        }
    }, [selectedQty, product])

    const addToCart = useCallback(() => {
        const addedProduct = cartProducts.find(addedProduct => product._id === addedProduct.product._id)

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
    }, [cartProducts, product, selectedQty, selectedAttribute, setCartProducts])

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
                    {product?.description?.full}
                </div>
                <div className="product-image">
                { product.image ? <img src={`${configData.SERVER_URL}${product?.image}`} alt={product.name} /> : '' }
                </div>
                {product?.attributes?.map(attribute => 
                    <div className="attributes" key={attribute._id}>
                        {attribute.variants.map(variant => 
                            <MemoizedIconBox 
                                size="large" 
                                clickEvent={() => setProductAttribute(attribute, variant)} 
                                key={variant}
                                // eslint-disable-next-line
                                parentClasses={selectedAttribute[attribute.title] == variant ? 'icon-box-selected' : ''}>
                                    {variant}
                            </MemoizedIconBox> 
                        )}
                    </div>
                )}
                <MemoizedProductQtyInput productQty={selectedQty} clickEvent={doSelectQty} />
                <div className="product-cart-actions">
                    <MemoizedProductAddToCart clickEvent={addToCart} />
                    <ProductGoToCart />
                </div>
            </div>
        </div>
    );
};

export default Product;