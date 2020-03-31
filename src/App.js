import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/login/SignUpScreen";
import ShopScreen from "./screens/shop/ShopScreen";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/shop" component={ShopScreen} />
        <Route path="/signin" component={SignUpScreen} />
      </Switch>
    </>
  );
}

export default App;
