import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('').then(res => res.json()).then(data => setOrders(data))
    }, [])
    return (
        <div>
            <small>Manage All Order</small>
        </div>
    );
};

export default ManageAllOrder;