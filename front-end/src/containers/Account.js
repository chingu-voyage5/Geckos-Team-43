import React, { Component } from "react";
import logo from "../images/logo.svg";
import "./index.css";
import Header from "../components/Header";
import userProfile from "../images/User.jpeg";
import General from "../components/EditGeneral";

const hide = {
  display: "none"
};
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { status: true, userProfile: userProfile };
    this.logIn = this.logIn.bind(this);
    this.logout = this.logout.bind(this);
  }
  logIn = () => {
    this.setState((currentState, props) => {
      return {
        status: true
      };
    });
  };
  logout = () => {
    this.setState((currentState, props) => {
      return {
        status: false
      };
    });
  };
  render() {
    return (
      <div>
        <Header
          title="Leet Up"
          login={this.state.status === true ? "Log Out" : "Log In"}
          userProfile={this.state.userProfile}
        />
        <General />
      </div>
    );
  }
}

export default Account;
