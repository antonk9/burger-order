import React from 'react';
import classes from './CategoryItem.module.scss';
import { ReactComponent as CircleArrow } from '../../assets/images/circle-arrow-right.svg';
import configData from "../../config.json";

const CategoryItem = (props) => {
    return (
        <a 
            href={props.href} 
            className={
                classes.category__item + (props.activeCategory === props.id ? ` ${classes.active}` : '')
            } 
            onClick={() => props.changeCategory(props.id)}>
            { props.image ? <img src={`${configData.SERVER_URL}${props.image}`} alt={props.title} /> : '' }
            <p>{props.title}</p>
            <CircleArrow />
        </a>
    );
};

export default CategoryItem;