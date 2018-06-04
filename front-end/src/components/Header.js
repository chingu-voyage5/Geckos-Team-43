import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "logged-off"
    };
    this.logIn = this.logIn.bind(this);
    this.logOff = this.logOff.bind(this);
  }
  logIn = () => {
    this.setState((currentState, props) => {
      return {
        status: "logged-on"
      };
    });
  };
  logOff = () => {
    this.setState((currentState, props) => {
      return {
        status: "logged-off"
      };
    });
  };
  render() {
    return (
      <header>
        <Link to={"/"} className="brand">
          <img src={logo} className="logo" alt="logo" />
          <h1>{this.props.title}</h1>
        </Link>
        <nav>
          <Link to={"/login"}>{this.props.login}</Link>
          <Link to={"/signup"}>{this.props.signup}</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
