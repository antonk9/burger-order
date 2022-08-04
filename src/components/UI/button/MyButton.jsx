import React from 'react';
import classes from './MyButton.module.scss'
import classNames from 'classnames';

const MyButton = ({children, theme, isDisabled, type}) => {
    return (
        <button 
            className={classNames(
                classes.button,
                theme === 'dark' && classes.dark,
                theme === 'red' && classes.red
                )}
            type={type}
            disabled={isDisabled}> 
            {children}
        </button>
    );
};

export default MyButton;