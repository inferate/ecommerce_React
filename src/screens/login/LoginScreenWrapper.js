import React from "react";
import "../../styles/sign-up.styles.scss";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const LoginScreenWrapper = () => {
  return (
    <div className="login-wrapper">
      <SignInScreen />
      <SignUpScreen />
    </div>
  );
};

export default LoginScreenWrapper;
