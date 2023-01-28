import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    // const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // },[]);

    // button click handler
    const addToCard = (product) =>{
        const newCart = [...carts, product];
        setCarts(newCart);
    }
    
    return (
        <div className='shop-Container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                        addToCard={addToCard}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;