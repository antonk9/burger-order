import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from './ListItem.module.scss'
import { ConfigContext } from "../../context";
import configData from '../../config.json';

const ListItem = (props) => {
    const { config } = useContext(ConfigContext);

    return (
        <Link 
            className={classes.list_item} 
            to={props.url} 
            state={{ productId: props._id}}>
            <div className={classes.list_item__image}>
                { props.image ? <img src={`${configData.SERVER_URL}${props.image}`} alt={props.title} /> : '' }
            </div>
            <div className={classes.list_item__top}>
                <div className={classes.list_item__description}>
                    <p>{props.name}</p>
                    <p className={classes.list_item__description_short}>{props.description.short}</p>
                </div>
                <p>{config.currency}{props.price}</p>
            </div>
        </Link>
    );
};

export default ListItem;