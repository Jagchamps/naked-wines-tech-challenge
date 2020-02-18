import React from "react";
import "../styles/App.scss";
import red from "../data/images/red-wine-placeholder.jpg";
import white from "../data/images/white-wine-placeholder.jpg";
import rose from "../data/images/rose-wine-placeholder-2.jpg";
import sparkling from "../data/images/sparkling-wine-placeholder-2.jpeg";

function WineImage(props) {
  const type = props.type;
  switch (type) {
    case "red":
      return <img className="product-image" src={red}></img>;
    case "white":
      return <img className="product-image" src={white}></img>;
    case "sparkling":
      return <img className="product-image" src={sparkling}></img>;
    case "rose":
      return <img className="product-image" src={rose}></img>;
  }
}

export default WineImage;
