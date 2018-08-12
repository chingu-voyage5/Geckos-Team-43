import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";
import { MyContext } from "../containers/context.js"; //importing the context

class Header extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ logout, state }) => (
          <header>
            <Link to={"/"} className="brand">
              <img src={logo} className="logo" alt="logo" />
              <h1>{this.props.title}</h1>
            </Link>
            {state.loggedIn ? (
              <nav className="navbar">
                <Link to={"/add-event"}>Create an Event</Link>
                <Link to={"/login"} onClick={logout}>
                  Logout
                </Link>
                <img
                  alt=""
                  src={this.props.userProfile}
                  className="profile-photo"
                />
              </nav>
            ) : (
              <nav className="navbar">
                <Link to={"/login"}>{this.props.login}</Link>
                <Link to={"/signup"}>{this.props.signup}</Link>
              </nav>
            )}
          </header>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Header;
