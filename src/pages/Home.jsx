import React from 'react';
import BottomNavbar from "components/BottomNavbar/BottomNavbar";
import CategoriesBar from "components/CategoriesBar/CategoriesBar";
import ListItems from "components/ListItems/ListItems";
import TopNavbar from 'components/TopNavbar/TopNavbar';
import Searchbar from "components/UI/Searchbar/Searchbar";

const Home = () => {
    return (
        <div className="page-home">
            <TopNavbar isNavButton={true} />
            <h2>Hey!</h2>
            <p className="intro">Let's get your order</p>
            <Searchbar />
            <CategoriesBar />
            <ListItems title="Popular" link="/category-popular" />
            <BottomNavbar />
        </div>
    );
};

export default Home;