import { signOut } from 'firebase/auth';
import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
            .then(res => {
                console.log('ressss', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
                .then(data => setOrders(data))
        }

    }, [user])
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.userName}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.unitPrice}</td>
                                    <td>{order.quantity}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
