import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";
import { MyContext } from "../containers/context.js"; //importing the context

class Header extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ logout, value }) => (
          <header>
            <Link to={"/"} className="brand">
              <img src={logo} className="logo" alt="logo" />
              <h1>{this.props.title}</h1>
            </Link>
            <nav className="navbar">
              <Link to={"/login"} onClick={logout}>
                {this.props.login}
              </Link>
              <img
                alt=""
                src={this.props.userProfile}
                className="profile-photo"
              />
              <Link to={"/signup"}>{this.props.signup}</Link>
            </nav>
          </header>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Header;
