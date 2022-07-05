import React from 'react';
import { Link } from "react-router-dom";
import classes from './ListItems.module.scss';
import burger1 from "../../assets/images/item-burger1.png";
import burger2 from "../../assets/images/item-burger2.png";
import ListItem from "../ListItem/ListItem";

const ListItems = ({title, link}) => {
    const popularItems = [
        {
            id: 1,
            name: 'Chipotle Cheesy Chicken',
            price: '12.60',
            image: burger1,
            url: '/product/1',
            description: {
                short: 'Chicken burger',
                full: 'A signature flame-grilled chicken patty topped with smoked beef'
            }
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
            }
        }
    ]
    return (
        <div className={classes.list_items}>
            <div className={classes.list_items__header}>
                <h3>{title}</h3>
                <Link to={link}>View all &gt;</Link>
            </div>
            <nav>
                {popularItems.map(item => 
                    <ListItem {...item} key={item.id} />)
                }
            </nav>
        </div>
    );
};

export default ListItems;