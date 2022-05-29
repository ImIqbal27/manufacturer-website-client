import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, des, image, price } = product;
    const navigate = useNavigate();
    const navigateToPurchasePage = _id => {
        navigate(`purchase/${_id}`)

    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{des}</p>
                <p><small>Price :{price}</small></p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Technology</div>
                    <div className="badge badge-outline">Tools</div>
                    <button
                        onClick={() => navigateToPurchasePage(_id)}
                        className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;