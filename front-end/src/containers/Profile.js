import React, { Component } from "react";
import logo from "../images/logo.svg";
import "./App.css";
import UserProfile from "../components/user-profile";
import Header from "../components/Header";
import userProfile from "../images/User.jpeg";

const hide = {
  display: "none"
};
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "logged-on", userProfile: userProfile };
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
      <div>
        <Header
          title="Leet Up"
          login={this.state.status === "logged-on" ? "Log Out" : "Log In"}
          userProfile={this.state.userProfile}
        />
        <UserProfile profileImage={this.state.userProfile} />
      </div>
    );
  }
}

export default Profile;
