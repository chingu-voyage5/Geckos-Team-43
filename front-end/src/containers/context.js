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
    redirect: false,
    handle: "",
    company: "",
    website: "",
    githubusername: "",
    skills: "",
    interests: [],
    eventTitle: "",
    eventDetails: "",
    eventType: "",
    eventLocation: "",
    eventDate: "",
    eventOwner: "",
    errors: null,
    token: null
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
              password: this.state.password
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
                    this.setState({ token: user.token })
                    fetch("api/profile", {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: this.state.token
                        },
                      mode: "cors"
                    })
                    .then(res => res.json())
                    .then(profile => {
                      console.log(profile)
                      this.setState({
                        bio: profile.bio,
                        handle: profile.handle,
                        interests: profile.interests
                      })
                    })
                    .catch(err => console.log(err));
                } else {
                  this.setState({ errors: user });
                  if (this.state.errors.email) alert(this.state.errors.email);
                  if (this.state.errors.password)
                    alert(this.state.errors.password);
                }
              })
              .catch(err => console.log(err));
          },
          updateAccount: () => {
            this.setState({ redirect: true }, () =>
              this.setState({ redirect: false })
            );
            //history.push("/edit");
          },
          handleUpdate: e => {
            e.preventDefault();
            const profile = {
              location: this.state.location,
              bio: this.state.bio,
              handle: this.state.handle,
              company: this.state.company,
              website: this.state.website,
              githubusername: this.state.githubusername,
              skills: this.state.skills,
              interests: this.state.interests
            };
            console.log(profile);
            // const update = {
            //   bio: "",
            //   location: ""
            // };
            if (this.state.bio !== "") profile.bio = this.state.bio;
            if (this.state.handle !== "") profile.handle = this.state.handle;
            if (this.state.interests !== "")
              profile.interests = this.state.interests;
            fetch("api/profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                //token goes here
                Authorization: this.state.token
              },
              body: JSON.stringify(profile),
              mode: "cors"
            })
              .then(res => res.json())
              .then(data => console.log(data))
              .catch(err => console.log(err));
          },
          handleCreateEvent: e => {
            e.preventDefault();
            const newEvent = {
              title: this.state.eventTitle,
              details: this.state.eventDetails,
              type: this.state.eventType,
              location: this.state.eventLocation,
              eventDate: this.state.eventDate,
              user: this.state.eventOwner
            };

            fetch("api/events", {
              method: "POST",
              body: JSON.stringify(newEvent),
              headers: {
                "Content-Type": "application/json",
                //token goes here
                Authorization: this.state.token
                },
              mode: "cors"
            })
              .then(data => data.json())
              .then(newEvent => {
                this.setState({
                  loading: false
                });
                console.log(newEvent);
              })
              .catch(err => console.log(err));
          },
          logout: () => {
            <Redirect to="/login" />;
            this.setState({ loggedIn: false });
          },
          goBackToProfile: () => {
            this.setState({ redirect: true }, () =>
              this.setState({ redirect: false })
            );
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
