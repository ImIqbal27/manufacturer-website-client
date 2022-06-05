import React from 'react';
import project1 from '../../image/Warehouse Management Client Side.png';
import project2 from '../../image/Dental Care.png';
import project3 from '../../image/TP-Link Router.png';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-primary'> Md Iqbal Hasan Rumon</h2>
            <h2>PortCity International University</h2>
            <div>
                <h2>My Knowledge About Tools/Technology</h2>
                <p>ReactJS <progress class="progress progress-success w-56" value="70" max="100"></progress></p>
                <p>NodeJS <progress class="progress progress-success w-56" value="50" max="100"></progress></p>
                <p>ExpressJS <progress class="progress progress-success w-56" value="35" max="100"></progress></p>
                <p>MongoDB Atlas <progress class="progress progress-success w-56" value="40" max="100"></progress></p>
            </div>
            <h2 className='text-secondary text-3xl'>My Projects</h2>
            {/* https://dental-care-app.netlify.app/ */}
            {/* https://product-analysis-rumon.netlify.app/ */}
            {/* https://warehouse-management-cli-a04c2.web.app/ */}
            <div className=' px-96 py-12'>
                <div className=' '>
                    <a className='text-2xl font-bold text-accent' href="https://warehouse-management-cli-a04c2.web.app/">Warehouse Management </a>
                    <a href="https://warehouse-management-cli-a04c2.web.app/">  <img src={project1} alt="" className='w-96' /></a>

                </div>
                <div className=' '>
                    <a className='text-2xl font-bold text-accent' href="https://dental-care-app.netlify.app/">Dental Care</a>
                    <a href="https://dental-care-app.netlify.app/">  <img src={project2} alt="" className='w-96' /></a>

                </div>
                <div className=''>
                    <a className='text-2xl font-bold text-accent' href="https://product-analysis-rumon.netlify.app/">Product Analysis</a>
                    <a href=" https://product-analysis-rumon.netlify.app/">  <img src={project3} alt="" className='w-96' /></a>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;