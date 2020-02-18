import React from "react";
import { Button, TextField, Tooltip } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWineGlassAlt,
  faGlobeEurope,
  faHeart,
  faTint
} from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import WineImage from "./WineImage.js";
import StarRating from "./StarRating.js";
import "../styles/App.scss";

const ATBBtn = withStyles({
  root: {
    height: "100%",
    color: "white",
    backgroundColor: "#35b63e",
    "&:hover": {
      backgroundColor: "#008506"
    }
  }
})(Button);

const OOSBtn = withStyles({
  root: {
    height: "100%",
    color: "white",
    backgroundColor: "#df171e",
    "&:hover": {
      backgroundColor: "#a40000"
    }
  }
})(Button);

function Card(props) {
  const product = props.product;
  const averageRating = Math.round(product.averageRating);
  const theme = useTheme();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <WineImage type={product.type} />
        <div className="product-label">
          {product.lowStock && <h6 className="badge badge-red">LOW STOCK</h6>}
        </div>
        <Tooltip title="Rating">
          <div className="product-rating">
            <StarRating numberOfStars="5" averageRating={averageRating} />
          </div>
        </Tooltip>
        <Tooltip title="Favourite">
          <div className="product-favourite">
            <FontAwesomeIcon icon={faHeart} size="lg" onClick="" />
          </div>
        </Tooltip>
      </div>
      <div className="product-name">
        <h2>{product.productName}</h2>
      </div>
      <div className="product-info">
        <h3>
          {product.producer.firstName} {product.producer.lastName}
        </h3>
        <div className="product-style">
          <Tooltip title="Grape" placement="left">
            <div>
              <FontAwesomeIcon
                className="style-icon"
                icon={faWineGlassAlt}
                fixedWidth
                size="sm"
              />
            </div>
          </Tooltip>
          <span>{product.wineGrape}</span>
        </div>
        <div className="product-origin">
          <Tooltip title="Origin" placement="left">
            <div>
              <FontAwesomeIcon
                className="style-icon"
                icon={faGlobeEurope}
                fixedWidth
                size="sm"
              />
            </div>
          </Tooltip>
          <span>{product.origin}</span>
        </div>
        <div className="product-abv">
          <Tooltip title="ABV%" placement="left">
            <div>
              <FontAwesomeIcon
                className="style-icon"
                icon={faTint}
                fixedWidth
                size="sm"
              />
            </div>
          </Tooltip>
          <span>{product.alcoholStrength}%</span>
        </div>
      </div>
      <div className="product-price">
        <p>Market Price: {product.price}</p>
        {product.markedOutOfStock && (
          <div className="oos-btn">
            <OOSBtn variant="contained" color="primary" size="large">
              Out of stock
            </OOSBtn>
          </div>
        )}
        {!product.markedOutOfStock && (
          <div className="product-form">
            <div className="product-quantity">
              <TextField
                size="small"
                variant="outlined"
                defaultValue={product.productQuantity}
              />
            </div>
            <div className="atb-btn">
              <ATBBtn variant="contained" color="primary" size="large">
                Add to Basket
              </ATBBtn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
