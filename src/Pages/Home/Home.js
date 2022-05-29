import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import DisplayProducts from './DisplayProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <DisplayProducts></DisplayProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;