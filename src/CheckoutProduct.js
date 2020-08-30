import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className="checkout-product">
            <img className="checkout-product__image" src={image} alt="" />

            <div className="checkout-product__info">
                <p className="checkout-product__title">{title}</p>

                <p className="checkout-product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkout-product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            // <p>⭐</p> 
                            <span role="img" aria-label="">⭐</span>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
