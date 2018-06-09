import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <Link to={"/"} className="brand">
          <img src={logo} className="logo" alt="logo" />
          <h1>{this.props.title}</h1>
        </Link>
        <nav>
          <Link to={"/login"} logOff={this.logOff}>
            {this.props.login}
          </Link>
          <img src={this.props.userProfile} className="profile-photo" />
          <Link to={"/signup"}>{this.props.signup}</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
