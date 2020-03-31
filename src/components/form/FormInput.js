import React from "react";
import "../../styles/form-input.styles.scss";

const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...restProps} />
      {label ? (
        <label
          className={`${
            restProps.value.lenth ? "shrink" : ""
          } form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
