import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/shop/ShopScreen";
import "./styles/app.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/shop" component={ShopScreen} />
    </Switch>
  );
}

export default App;
