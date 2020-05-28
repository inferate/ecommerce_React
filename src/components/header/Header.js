import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/berish.svg";
import { auth } from "../../firebase/firebaseUtils";
import "../../styles/header.styles.scss";
import CartDropDown from './CartDropDown';
import CartIcon from './CartIcon';

const Header = ({ currentUser,hidden }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="./signin">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      {hidden ? null :  <CartDropDown/>}
    </div>
  );
};

const mapStateToProps = ({user:{currentUser},cart:{hidden} }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps, null)(Header);
