import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const orderData = useLoaderData();
    // const {prodcuts} = useLoaderData();
    const [carts, setCarts] = useState([]);
    return (
        <div>
            <h2>This is Order: {orderData.length}</h2>
            <div className='shop-container'>
                <div className='product-container'>

                </div>
                <div className='cart-container'>
                    <Cart carts={carts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;