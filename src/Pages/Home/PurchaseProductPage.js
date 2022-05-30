import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseProductPage = () => {
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `https://shrouded-lake-70100.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetail(data))

    }, []);

    const handleOrder = event => {
        event.preventDefault();
        const productName = productDetail.name;
        const unitPrice = productDetail.price;
        const quantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const userName = event.target.username.value;
        const userEmail = event.target.userEmail.value;
        console.log(quantity, address, phone, userName, userEmail);
        const orderDetails = { productName, unitPrice, quantity, phone, address, userName, userEmail };
        console.log(orderDetails);
        const url = `https://shrouded-lake-70100.herokuapp.com/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Order placed successfully !');
            });

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={productDetail.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl text-primary-focus font-bold">{productDetail.name}</h1>
                    <p className="py-1">{productDetail.des}</p>
                    <h3 className=" text-primary-focus text-2xl">Unit Price: $ {productDetail.price}</h3>
                    <div className='px-24'>
                        <form onSubmit={handleOrder}>
                            {/* //////////////// Quantity  //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name='quantity' placeholder="Type here quantity" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text-alt">  { }  </span>
                                </label>
                            </div>
                            {/* ////////////////  phone //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name='phone' placeholder="Type here phone" className="input input-bordered input-primary w-full max-w-xs " />
                            </div>
                            {/* ////////////////  address //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <textarea className="textarea textarea-primary" name='address' placeholder="Your address"></textarea>
                            </div>
                            {/* //////////////// name  //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='username' disabled value={user?.displayName || ''} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">

                                </label>
                            </div>
                            {/* //////////////// email  //////////////// */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='userEmail' disabled value={user?.email || ''} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                <label className="label">

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