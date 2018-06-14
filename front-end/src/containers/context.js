import React, { Component } from "react";

// creates the global container tthat can be accesed by any component
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "",
    email: "",
    password: "",
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
          handleSubmit: e => {
            e.preventDefault();
            alert(`Confirmation email sent to ${this.state.email}`);
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
