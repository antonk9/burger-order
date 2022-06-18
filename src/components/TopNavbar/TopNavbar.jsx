import React from 'react';
import { ReactComponent as MenuRight } from '../../assets/images/menu-right.svg';
import classes from './TopNavbar.module.scss';

const TopNavbar = () => {
    return (
        <div className={classes.top_navbar}>
            <MenuRight />
        </div>
    );
};

export default TopNavbar;