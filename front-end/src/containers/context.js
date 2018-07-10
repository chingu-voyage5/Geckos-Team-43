import React, { Component } from "react";
import userProfile from "../images/User.jpeg";
import { Redirect } from "react-router";
import history from "../components/History";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    bio: "",
    userId: "",
    location: "",
    loggedIn: false,
    loading: true,
    userProfile: userProfile,
    redirect: false
  };

  render() {
    return (
      //provides global state and functions
      <MyContext.Provider
        value={{
          state: this.state,
          handleChange: e => {
            const target = e.target;
            const value = target.value;
            const name = target.name;

            this.setState({ [name]: value });
          },
          handleRegister: e => {
            e.preventDefault();
            const newUser = {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              password2: this.state.password2
            };

            fetch("api/users/register", {
              method: "POST",
              body: JSON.stringify(newUser),
              headers: {
                "Content-Type": "application/json"
              },
              mode: "cors"
            })
              .then(data => data.json())
              .then(user => {
                this.setState({
                  loggedIn: true,
                  loading: false,
                  userId: user._id,
                  userProfile: `http:${user.avatar}`
                });
                console.log(user);
              })
              .catch(err => console.log(err));
          },
          handleLogin: e => {
            e.preventDefault();
            this.setState({
              loading: true
            });
            const user = {
              email: this.state.email,
              password: this.state.password,
              userProfile: this.state.userProfile,
              location: this.state.location
            };

            fetch("api/users/login", {
              method: "POST",
              body: JSON.stringify(user),
              headers: {
                "Content-Type": "application/json"
              },
              mode: "cors"
            })
              .then(data => data.json())
              .then(user => {
                if (user.token) {
                  fetch("api/users/current", {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: user.token
                    },
                    mode: "cors"
                  })
                    .then(res => res.json())
                    .then(data => {
                      this.setState({
                        loggedIn: true,
                        loading: false,
                        name: data.name,
                        userId: data.id,
                        userProfile: `http:${data.avatar}`
                      });
                    });
                }
                console.log(user);
              })
              .catch(err => console.log(err));
          },
          updateAccount: () => {
            this.setState({ redirect: true });
            //history.push("/edit");
          },
          handleUpdate: (e) => {
            e.preventDefault();
            const update = {
              handle: "some handle"
            }
            if(this.state.bio !== '') update.bio = this.state.bio;
            if(this.state.interests !== '') update.interests = this.state.interests;
            fetch("api/profile", {
              method: "POST",
              body: JSON.stringify(update),
              headers: {
                "Content-Type": "application/json",
                //token goes here
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMzIzMmUxMjM2YzliNTgwZGE3NjUxYiIsIm5hbWUiOiJ0ZXN0IiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmM5N2IxZjJkMjg5OGNkMmQ2NDY2Y2U5NWQ0YmEzMz9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1MzEyMzE5NTgsImV4cCI6MTUzMTIzNTU1OH0.A1eHO6j7iRM1llCxMC2QOevTeyFdGMTuSStPMVZFs4E"
              },
              mode: "cors"
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            this.setState({ redirect: true });
          },
          logout: () => {
            <Redirect to="/login" />;
            this.setState({ loggedIn: false });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

//exported for any component to access
export { MyProvider, MyContext };
