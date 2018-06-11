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
        <UserProfile profileImage={this.state.userProfile} />
      </div>
    );
  }
}

export default Profile;
