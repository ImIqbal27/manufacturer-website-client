import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const PurchaseProductPage = () => {
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetail(data))

    }, []);
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={productDetail.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl text-primary-focus font-bold">{productDetail.name}</h1>
                    <p className="py-1">{productDetail.des}</p>
                    <h3 className=" text-primary-focus text-2xl">Unit Price: $ {productDetail.price}</h3>
                    <div className='px-24'>
                        <form  >
                            {/* //////////////// Quantity  //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" placeholder="Type here quantity" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text-alt">  { }  </span>
                                </label>
                            </div>
                            {/* ////////////////  phone //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="Type here phone" className="input input-bordered input-primary w-full max-w-xs " />
                            </div>
                            {/* ////////////////  address //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <textarea className="textarea textarea-primary" placeholder="Your address"></textarea>
                            </div>
                            {/* //////////////// name  //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" disabled value={user?.displayName || ''} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text-alt"> { } </span>
                                </label>
                            </div>
                            {/* //////////////// email  //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" disabled value={user?.email || ''} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text-alt">{ }</span>
                                </label>
                            </div>
                            {/* ////////////////  submit  //////////////// */}

                            <input type="submit" className="btn btn-primary" value='Confirm' />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseProductPage;