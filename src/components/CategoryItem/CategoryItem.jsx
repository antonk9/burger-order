import React from 'react';
import classes from './CategoryItem.module.scss';
import { ReactComponent as CircleArrow } from '../../assets/images/circle-arrow-right.svg'

const CategoryItem = (props) => {
    return (
        <a 
            href={props.url} 
            className={
                classes.category__item + (props.activeCategory === props.id ? ` ${classes.active}` : '')
            } 
            onClick={() => props.changeCategory(props.id)}>
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <CircleArrow />
        </a>
    );
};

export default CategoryItem;