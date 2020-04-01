import React, { Component } from "react";
import DefaultButton from "../../components/form/DefaultButton";
import FormInput from "../../components/form/FormInput";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtils";
import "../../styles/form-input.styles.scss";

class SignInScreen extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.log(e);
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="button-container">
            <DefaultButton type="submit">Sign In</DefaultButton>
            <DefaultButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </DefaultButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignInScreen;
