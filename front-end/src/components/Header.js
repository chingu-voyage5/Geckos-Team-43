import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";

class Header extends React.Component {
  componentDidMount() {
    // const data = {
    //   name: "test1",
    //   email: "test1@gmail.com",
    //   password: "123456",
    //   password2: "123456"
    // };

    const dummyUser = {
      email: "vlad@gmail.com",
      password: "123456"
    };

    //@route  GET api/users/test
    //@desc   test route for users
    //@access Public

    fetch("api/users/test")
      .then(data => data.json())
      .then(test => {
        console.log("testing api/users/test route");
        console.log(test);
      })
      .catch(err => console.log("api/users/test route failed" + err));

    // fetch("api/users/register", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   mode: "cors"
    // })
    //   .then(data => data.json())
    //   .then(user => {
    //     console.log(user);
    //     console.log(data);
    //   })
    //   .catch(err => console.log(err));

    //@route  POST api/users/login
    //@desc   login with test user
    //@access Public

    fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify(dummyUser),
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(data => data.json())
      .then(user => console.log(user));

    //@route  POST&GET api/users/login and api/users/current
    //@desc   login with test user and check they're logged in
    //@access Private

    fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify(dummyUser),
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(data => {
        return data.json();
      })
      .then(user => {
        let bearer = user.token;
        console.log("survey says!", bearer);
        return fetch("api/users/current", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: bearer
          },
          mode: "cors"
        }).then(current => console.log(current));
      });
  }
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
