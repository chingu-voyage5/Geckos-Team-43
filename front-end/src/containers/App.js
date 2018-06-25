import React, { Component } from "react";
import logo from "../images/logo.svg";
import "../containers/index.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../containers/Home";
import Signup from "../containers/sign-up";
import Login from "../containers/login";
import UserProfile from "../containers/Profile";
import Account from "../containers/Account";
import { MyProvider } from "../containers/context.js"; //All consumers point to the nearest provider

class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <div>
            <ul className="Navlinks">
              <li>
                <Link to="/" component={Home}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/user/" component={UserProfile}>
                  UserProfile
                </Link>
              </li>
              <li>
                <Link to="/account/" component={Account}>
                  Account
                </Link>
              </li>
              <li>
                <Link to="/signup" component={Signup}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" component={Login}>
                  Login
                </Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/user/:userId" component={UserProfile} />
            <Route path="/account" component={Account} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default App;
