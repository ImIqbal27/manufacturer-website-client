import React from 'react';
import Footer from '../Footer/Footer';
import Services from '../OurServices/Services';
import Banner from './Banner';
import DisplayProducts from './DisplayProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className='px-12'>
                <DisplayProducts></DisplayProducts>

            </div>
            <div>
                <Services></Services>
            </div>
            <div className='px-12'>
                <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;