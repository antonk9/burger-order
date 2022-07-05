import React, { useState } from 'react';
import pizza from '../../assets/images/cat-pizza.png';
import cake from '../../assets/images/cat-cake.png';
import burger from '../../assets/images/cat-burger.png';
import CategoryItem from "../CategoryItem/CategoryItem";
import classes from './CategoriesBar.module.scss'

const CategoriesBar = () => {
    const categoryItems = [
        {id: 1, image: burger, name: 'Burgers', url: '#'},
        {id: 2, image: pizza, name: 'Pizza', url: '#'},
        {id: 3, image: cake, name: 'Cakes', url: '#'}
    ]

    const [activeCategory, setActiveCategory] = useState(0)
    
    const changeCategory = catId => {
        setActiveCategory(catId)
    }
    return (
        <div className={classes.categories__bar}>
            {categoryItems.map(item => 
                <CategoryItem
                    {...item} 
                    changeCategory={changeCategory} 
                    key={item.id} 
                    activeCategory={activeCategory} />)
                    }
        </div>
    );
};

export default CategoriesBar;