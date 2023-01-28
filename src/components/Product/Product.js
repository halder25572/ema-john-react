import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    
    return (
        <div className='product' style={{height: '510px'}}>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} Starts</small></p>
            </div>
            <button onClick={() => props.addToCard(props.product)} className='btn-cart'>
                <p className='text-btn'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;