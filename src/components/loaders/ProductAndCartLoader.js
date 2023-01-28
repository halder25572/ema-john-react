import {getStoredCart} from '../utilities/fakedb';

export const productAndCartLoader = async () => {
    // get products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get Cart
    const saveCart = getStoredCart();
    console.log('save Cart', saveCart);

    return products;
}