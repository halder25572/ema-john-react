import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { carts } = props;

    // total
    let total = 0;
    let shipping = 0;
    for(const products of carts){
        total = total + products.price;
        shipping = shipping + products.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-bg'>
            <h1>Order Summary</h1>
            <h2>Selected Item: {carts.length}</h2>
            <h3>Total Price: ${total}</h3>
            <h4>Total Shipping Charge: {shipping}</h4>
            <h5>Tax: {tax}</h5>
            <h1>Grand Total: {grandTotal}</h1>
        </div>
    );
};

export default Cart;