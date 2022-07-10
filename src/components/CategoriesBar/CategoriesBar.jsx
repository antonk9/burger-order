import React, { useEffect, useState } from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import classes from './CategoriesBar.module.scss';
import CategoriesService from '../../API/CategoriesService';

const CategoriesBar = () => {
        const [categories, setCategories] = useState([])

        useEffect(() => {
            (async function () {
                const { data } = await CategoriesService.getAllCategories()
                setCategories(data)
            }())
        }, [])

    const [activeCategory, setActiveCategory] = useState(0)
    
    const changeCategory = catId => {
        setActiveCategory(catId)
    }
    return (
        <div className={classes.categories__bar}>
            {categories.map(item => 
                <CategoryItem
                    {...item} 
                    changeCategory={changeCategory} 
                    key={item._id} 
                    activeCategory={activeCategory} />)
                    }
        </div>
    );
};

export default CategoriesBar;