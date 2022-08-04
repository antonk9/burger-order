import React, { useState } from 'react';
import MyInput from "components/UI/input/MyInput";
import classes from './Searchbar.module.scss'

const Searchbar = () => {
    const [query, setQuery] = useState('');
    console.log(query)

    const searchFilter = val => setQuery(val)
    return (
        <div className={classes.searchbar}>
            <MyInput 
                placeholder="Search our delicious burgers" 
                className={classes.searchbar__input} 
                icon="search"
                onChange={(e => searchFilter(e.target.value))} />
        </div>
    );
};

export default Searchbar;