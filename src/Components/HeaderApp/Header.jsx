import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import StoreLogo from "./LogoStore";
import Search from "./Search";

const Header = () => {
  return (
    <div className="headerApp">
      <div className="leftSection">
        <Link to="/">
          <StoreLogo />
        </Link>
      </div>
      <div className="middleSection">
        <Search />
        <div className="rightSection">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
