import React, { Component } from "react";
import userProfile from "../images/User.jpeg";

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
    dateJoined: "",
    loggedIn: false,
    loading: true,
    userProfile: userProfile,
    redirect: false,
    handle: "",
    company: "",
    website: "",
    githubusername: "",
    skills: [],
    interests: [],
    eventId: "",
    eventTitle: "",
    eventDetails: "",
    eventType: "",
    eventLocation: "",
    eventDate: "",
    eventOwner: "",
    eventParticipants: {},
    errors: null,
    token: null,
    deleteAccount: false
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
                        loading: true,
                        name: data.name,
                        userId: data.id,
                        userProfile: `http:${data.avatar}`
                      });
                    });
                  this.setState({ token: user.token });
                  fetch("api/profile", {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: this.state.token
                    },
                    mode: "cors"
                  })
                    .then(res => res.json())
                    .then(profile => {
                      this.setState({
                        loading: false,
                        bio: profile.bio,
                        handle: profile.handle,
                        interests: profile.interests.join(","),
                        dateJoined: profile.date,
                        website: profile.website,
                        location: profile.location,
                        skills: profile.skills.join(","),
                        githubusername: profile.githubusername,
                        company: profile.company
                      });
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
          },
          handleUpdateUser: e => {
            e.preventDefault();
            const updateUser = {};
            fetch("api/users/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                //token goes here
                Authorization: this.state.token
              },
              body: JSON.stringify(updateUser),
              mode: "cors"
            })
              .then(res => res.json())
              .then(data => console.log(data))
              .catch(err => console.log(err));
          },
          handleUpdateProfile: e => {
            e.preventDefault();
            const profile = {};

            if (this.state.location !== "")
              profile.location = this.state.location;
            if (this.state.company !== "") profile.company = this.state.company;
            if (this.state.skills !== "") profile.skills = this.state.skills;
            if (this.state.githubusername !== "")
              profile.githubusername = this.state.githubusername;
            if (this.state.website !== "") profile.website = this.state.website;
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
                  loading: false,
                  eventId: newEvent._id
                });
                console.log(newEvent);
              })
              .catch(err => console.log(err));
            this.setState({ redirect: true }, () =>
              this.setState({ redirect: false })
            );
          },
          handleAccountDelete: e => {
            fetch("api/profile", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                //token goes here
                Authorization: this.state.token
              },
              body: JSON.stringify({
                userId: this.state.userId
              })
            })
              .then(res => res.json())
              .then(data => {
                this.setState({ loggedIn: false });
                console.log(data);
              })
              .catch(err => console.log(err));
          },
          openDeleteConfirmation: e => {
            e.preventDefault();
            this.setState({
              deleteAccount: true
            });
          },
          handleClose: e => {
            e.preventDefault();
            this.setState({
              deleteAccount: false
            });
          },
          logout: () => {
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
