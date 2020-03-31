import React from "react";
import "../../styles/custom-button.styles.scss";

const DefaultButton = ({ children, restProps }) => {
  return (
    <button className="custom-button" {...restProps}>
      {children}
    </button>
  );
};

export default DefaultButton;
