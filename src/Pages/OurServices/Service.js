import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, des, img } = service;
    return (
        <div class="service-card-container  card w-64 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">new</div>
                </h2>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default Service;