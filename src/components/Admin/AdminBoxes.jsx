import React, { useState,useEffect } from 'react';
import classes from './AdminBoxes.module.scss';
import UsersService from "API/UsersService";
import ProductsService from "API/ProductsService";

const AdminNav = () => {
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])

    const adminNav = [
        {
            title: 'Users',
            _id: 1
        }, {
            title: 'Products',
            _id: 2
        }, {
            title: 'Orders',
            _id: 3
        }
    ]

    useEffect(() => {
        (async function () {
            const users = await UsersService.getAllUsers()
            const products = await ProductsService.getAllProducts()
            setUsers(users.data)
            setProducts(products.data)
        }())
    }, [])

    return (
        <div>
            <div className={classes.box_item}>
                <b>Users</b>
                {users.map((user, i) =>
                    <div className={classes.box_item_row} key={user._id}>{
                    `${i+1}. ${user.firstname} ${user.lastname}`}</div>
                    )
                }
            </div>
            <div className={classes.box_item}>
                <b>Products</b>
                {products.map((product, i) =>
                    <div className={classes.box_item_row} key={product._id}>{
                    `${i+1}. ${product.name}`}</div>
                    )
                }
            </div>
        </div>
    );
};

export default AdminNav;