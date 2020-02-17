import React, { useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faWineGlassAlt, 
    faGlobeEurope, 
    faHeart, 
    faShoppingBasket,
    faTint,
} 
    from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import StarRating from './StarRating.js';
import '../styles/App.scss';
import red from '../data/images/red-wine-placeholder.jpg';
import white from '../data/images/white-wine-placeholder.jpg';
import rose from '../data/images/rose-wine-placeholder-2.jpg';
import sparkling from '../data/images/sparkling-wine-placeholder-2.jpeg';

const SuccessBtn = withStyles({
    root: {
        height: "100%",
        color: white,
        backgroundColor: "#35b63e",
        "&:hover": {
            backgroundColor: "#008506",
        },
    },
})(Button);

const ErrorBtn = withStyles({
    root: {
        color: white,
        backgroundColor: "#df171e",
        "&:hover": {
            backgroundColor: "#a40000",
        },
    },
})(Button);

function WineImage(props) {
    const type = props.type;
    switch (type) {
        case "red": 
            return <img className="product-image" src={red}></img>
        case "white":
            return <img className="product-image" src={white}></img>
        case "sparkling":
            return <img className="product-image" src={sparkling}></img>
        case "rose":
            return <img className="product-image" src={rose}></img>
    }
}

function Card(props) {
    const product = props.product;
    const theme = useTheme();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <WineImage type={product.type}/>
                <div className="product-label">
                    {product.lowStock &&
                        <h6 className="badge badge-red">LOW STOCK</h6>
                    }
                </div>
                <div className="product-rating">
                    <StarRating 
                        numberOfStars="5"
                        averageRating={product.averageRating}/>
                </div>
                <FontAwesomeIcon 
                    className="product-favourite"
                    icon={faHeart}
                    color="white" 
                    size="lg"/>
            </div>
            <div className="product-info">
                <div className="product-description">
                    <h2>{product.productName}</h2>
                    <h3>{product.producer.firstName} {product.producer.lastName}</h3>
                    {/* <p>{product.tastingNotes}</p> */}
                    <div className="product-style">
                        <FontAwesomeIcon 
                            className="style-icon" 
                            icon={faWineGlassAlt} 
                            fixedWidth
                            size="sm"/>
                        <span>{product.wineGrape}</span>
                    </div>
                    <div className="product-origin">
                        <FontAwesomeIcon 
                        className="style-icon" 
                        icon={faGlobeEurope} 
                        fixedWidth
                        size="sm"/>
                        <span>{product.origin}</span>
                    </div>
                    <div className="product-abv">
                        <FontAwesomeIcon 
                        className="style-icon" 
                        icon={faTint} 
                        fixedWidth
                        size="sm"/>
                        <span>{product.alcoholStrength}%</span>
                    </div>
                </div>
            </div>
            <div className="product-price">
                <p>Market Price: {product.price}</p>
                {product.markedOutOfStock &&
                    <ErrorBtn variant="contained" color="primary">Out of stock</ErrorBtn>
                }
                {!product.markedOutOfStock && 
                    <div className="product-form">
                        <div className="product-quantity">
                            <TextField  variant="outlined" />
                        </div>
                        <div className="atb-btn">
                            <SuccessBtn startIcon={<FontAwesomeIcon icon={faShoppingBasket} size="sm"/>} variant="contained" color="primary"
                            size="large">Buy Now</SuccessBtn>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Card;