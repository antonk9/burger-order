import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from './ListItem.module.scss'
import { ConfigContext } from "../../context";

const ListItem = (props) => {
    const { config } = useContext(ConfigContext);

    return (
        <Link className={classes.list_item} to={props.url}>
            <div className={classes.list_item__image}>
                <img src={props.image} alt={props.name} />
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