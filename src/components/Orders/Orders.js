import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const orderData = useLoaderData();
    return (
        <div>
            <h2>This is Order: {orderData.length}</h2>
        </div>
    );
};

export default Orders;