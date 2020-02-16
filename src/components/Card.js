import React from 'react';
import { Grid } from '@material-ui/core';
import '../styles/App.scss';
import red from '../data/images/red-wine-placeholder.jpg';
import white from '../data/images/white-wine-placeholder.jpg';
import rose from '../data/images/rose-wine-placeholder-2.jpg';
import sparkling from '../data/images/sparkling-wine-placeholder-2.jpeg';

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

    return (
        <div className="product-card">
            <div className="product-image-container">
                <WineImage type={product.type}/>
                <div className="product-label">
                    {product.lowStock &&
                        <h6 className="badge badge-red">LOW STOCK</h6>
                    }
                    {product.markedOutOfStock &&
                        <h6 className="badge badge-red">OUT OF STOCK</h6>
                    }
                </div>
            </div>
            <div className="product-info">
                <div className="product-description">
                    <h3>{product.productName}</h3>
                    <h3>{product.producer.firstName} {product.producer.lastName}</h3>
                    <p>{product.tastingNotes}</p>
                </div>
            </div>
            {/* <div className="line-separator"></div> */}
            <div className="product-price">
                <p>£2.99</p>
            </div>
        </div>
    );

    // return (
    //     <Grid
    //         container
    //         className="product-card"
    //         alignContent="flex-start"
    //         alignItems="stretch"
    //         direction="column"
    //         spacing={0}>
    //         <Grid
    //             item
    //             xs={12}>
    //             <div className="product-image-container">
    //                 <WineImage type={product.type}/>
    //                 <div className="product-label">
    //                     {product.lowStock &&
    //                         <h6 className="badge badge-red">LOW STOCK</h6>
    //                     }
    //                     {product.markedOutOfStock &&
    //                         <h6 className="badge badge-red">OUT OF STOCK</h6>
    //                     }
    //                 </div>
    //             </div>
    //         </Grid>
    //         <Grid
    //             item
    //             xs={12}>
    //             <div className="product-info">
    //                 <div className="product-description">
    //                     <h3>{props.product.productName}</h3>
    //                     <h3>{props.product.producer.firstName} {props.product.producer.lastName}</h3>
    //                     <p>{props.product.tastingNotes}</p>
    //                 </div>
    //             </div>
    //             <div className="line-separator"></div>
    //         </Grid>
    //         <Grid
    //             item
    //             xs={12}>
    //             <div className="product-price">
    //                 <p>£2.99</p>
    //             </div>
    //         </Grid>
    //     </Grid>
    // );
}

export default Card;