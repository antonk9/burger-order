import React from 'react';
import classes from './MyInput.module.scss';
import { ReactComponent as Search } from 'assets/images/search.svg';

const MyInput = (props) => {
    return (
        <div className={classes.input__control}>
            <input 
                {...props} 
                className={props.icon ? `${props.className} ${classes.input__icon}` : props.className}
                />
            {props.icon 
                ? <i className={`icon-${props.icon}`}><Search /></i>
                : ''
            }
        </div>
        
    );
};

export default MyInput;