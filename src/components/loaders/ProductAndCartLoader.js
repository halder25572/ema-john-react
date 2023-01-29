import {getStoredCart} from '../utilities/fakedb';

export const productAndCartLoader = async () => {
    // get products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get Cart
    const saveCart = getStoredCart();
    console.log(products);
    for(const id in saveCart){
        console.log(id);
    }

    return products;
}