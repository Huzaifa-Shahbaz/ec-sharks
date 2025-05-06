import React from "react";
import Logo from '../assets/images/site-logo-small.png'

const LoadingScreen = () => {

  return (
    <div className="loading-screen">
      <div className="spinner-container">
        <img src={Logo} alt="" />
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;