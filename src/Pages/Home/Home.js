import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import DisplayProducts from './DisplayProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;