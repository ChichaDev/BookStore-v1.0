import React from "react";
import LogoStore from "../img/LogoStore.png";
import "../../styles/HeaderApp.css";

const StoreLogo = () => {
  return (
    <div className="logoBookStore">
      <img src={LogoStore} alt="BookBook" />
    </div>
  );
};

export default StoreLogo;
