import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import HomeScreen from "./screens/HomeScreen";
import LoginScreenWrapper from "./screens/login/LoginScreenWrapper";
import ShopScreen from "./screens/shop/ShopScreen";
import { setCurrentUser } from "./store/actions/actions";
import "./styles/app.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(dbSnapShot => {
          setCurrentUser({
            currentUser: {
              id: dbSnapShot.id,
              ...dbSnapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/shop" component={ShopScreen} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <LoginScreenWrapper />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
