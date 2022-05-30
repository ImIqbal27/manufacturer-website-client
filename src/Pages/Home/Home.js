import React from 'react';
import Services from '../OurServices/Services';
import Banner from './Banner';
import DisplayProducts from './DisplayProducts';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';

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
                <BusinessSummary></BusinessSummary>
                <Reviews></Reviews>
            </div>

        </div>
    );
};

export default Home;