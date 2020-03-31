import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/berish.svg";
import "../../styles/header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" style={{ color: "#1a244ae0" }}></Logo>
      </Link>
      <h1 className="title">Wearrish</h1>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
