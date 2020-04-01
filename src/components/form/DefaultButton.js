import React from "react";
import "../../styles/custom-button.styles.scss";

const DefaultButton = ({ children, isGoogleSignIn, ...restProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...restProps}>
    {children}
  </button>
);

export default DefaultButton;
