import React from "react";
import Loader from "react-loader-spinner";
import "../styles/App.scss";

function LoadingPage() {
  return (
    <div className="loading-icon">
      <Loader type="Rings" color="black" height={100} width={100} />
    </div>
  );
}

export default LoadingPage;
