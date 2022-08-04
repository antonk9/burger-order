import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import classes from './ListItems.module.scss';
import ListItem from "components/ListItem/ListItem";
import ProductsService from 'API/ProductsService';

const ListItems = ({title, link}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async function () {
            const { data } = await ProductsService.getAllProducts() // TODO: prepare popular products
            setProducts(data)
        }())
    }, [])
    return (
        <div className={classes.list_items}>
            <div className={classes.list_items__header}>
                <h3>{title}</h3>
                <Link to={link}>View all &gt;</Link>
            </div>
            <nav>
                {products.map(item => 
                    <ListItem {...item} key={item._id} />)
                }
            </nav>
        </div>
    );
};

export default ListItems;