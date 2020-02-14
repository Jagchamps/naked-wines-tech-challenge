import React from 'react';
import '../styles/App.css';

function Card(props) {
    return (
        <div className="product-card">
            <div className="product-image">

            </div>
            <div className="product-info">

            </div>
            <div className="product-price">
                
            </div>
            <p>This is card with product {props.product.id}</p>
        </div>
    );
}

export default Card;