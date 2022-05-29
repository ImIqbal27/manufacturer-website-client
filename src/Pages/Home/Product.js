import React from 'react';

const Product = ({ product }) => {
    const { name, des, image, price } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="product" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{des}</p>
                <p><small>Price :{price}</small></p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Technology</div>
                    <div class="badge badge-outline">Tools</div>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;