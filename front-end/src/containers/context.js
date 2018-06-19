import React, { Component } from "react";

// creates the global container tthat can be accesed by any component
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    bio: ""
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
            const bio = target.bio;

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
                console.log(user);
              })
              .catch(err => console.log(err));
          },
          handleLogin: e => {
            e.preventDefault();
            const user = {
              email: this.state.email,
              password: this.state.password,
              fireRedirect: false
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
                console.log(user);
                fetch("api/users/current", {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: user.token
                  },
                  mode: "cors"
                })
                  .then(res => res.json())
                  .then(data => console.log(data));
              })
              .catch(err => console.log(err));
          },
          addBio: e => {
            e.preventDefault();
            this.setState({ bio: this.state.bio });
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
