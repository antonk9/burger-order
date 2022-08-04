import React from 'react';
import { ReactComponent as Home } from 'assets/images/home.svg';
import { ReactComponent as Heart } from 'assets/images/heart.svg';
import { ReactComponent as User } from 'assets/images/user.svg';
import { ReactComponent as Dots } from 'assets/images/h-dots.svg';
import { Link, useLocation } from "react-router-dom";
import classes from './BottomNavbar.module.scss';


const BottomNavbar = () => {
    const location = useLocation();

    const navItems = [
        {title: 'Home', icon: Home, src: '/', className: "home"},
        {title: 'Favorites', icon: Heart, src: '/favorites', className: "favorites"},
        {title: 'Account', icon: User, src: '/my-account', className: "account"},
        {title: 'More', icon: Dots, src: '/more', className: "more"},
    ]
    return (
        <div className={classes.bottom_navbar}>
            {navItems.map(item => 
                <Link 
                    to={item.src} 
                    className={`icon_${item.className}` + (location.pathname === item.src ? ` active ${classes.active}` : '')}
                    key={item.className}>
                    <item.icon />
                    <p>{item.title}</p>
                </Link>
            )}
        </div>
    );
};

export default BottomNavbar;