import React from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="app-header">
      <div className="header-left">
        <h1>Champion Wines</h1>
      </div>
      <div className="header-right">
      <Button startIcon={<FontAwesomeIcon icon={faShoppingBasket} size="lg" onClick="" />} variant="outlined" color="secondary" size="large">Add card</Button>
      </div>
    </div>
  );
}

export default Header;
