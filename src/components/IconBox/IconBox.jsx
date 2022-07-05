import React from 'react';
import classes from './IconBox.module.scss';

const IconBox = ({ children, size, clickEvent, parentClasses }) => {
    return (
        <div className={
            classes.box_icon + (size === 'large' ? ` ${classes.box_icon__large}` : '') + 
            (parentClasses ? ` ${parentClasses}` : '')} onClick={clickEvent}>
            {children}
        </div>
    );
};

export default IconBox;