import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/login/LoginScreenWrapper";
import ShopScreen from "./screens/shop/ShopScreen";
import "./styles/app.css";

class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(dbSnapShot => {
          this.setState({
            currentUser: {
              id: dbSnapShot.id,
              ...dbSnapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/shop" component={ShopScreen} />
          <Route path="/signin" component={SignUpScreen} />
        </Switch>
      </>
    );
  }
}

export default App;
