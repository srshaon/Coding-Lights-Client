import './Home.css';

import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import AllReviews from '../AllReviews/AllReviews';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <Products></Products>
            <AllReviews></AllReviews>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;