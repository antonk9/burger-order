import React from 'react';
import CategoriesBar from "../components/CategoriesBar/CategoriesBar";
import TopNavbar from '../components/TopNavbar/TopNavbar';
import Searchbar from "../components/UI/Searchbar/Searchbar";

const Home = () => {
    return (
        <div className="page-home">
            <TopNavbar />
            <h2>Hey!</h2>
            <p className="intro">Let's get your order</p>
            <Searchbar />
            <CategoriesBar />
        </div>
    );
};

export default Home;