import React from 'react';
import classes from './MyButton.module.scss'

const MyButton = ({children, theme, isDisabled}) => {
    return (
        <button 
            type="button" 
            className={classes.button + (` ${theme === 'dark' ? classes.dark : classes.red}`)}
            disabled={isDisabled}> 
            {children}
        </button>
    );
};

export default MyButton;