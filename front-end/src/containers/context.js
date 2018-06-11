import React, { Component } from "react";

// creates the global container tthat can be accesed by any component
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "",
    email: "",
    password: ""
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
          handleSubmit: e => {
            e.preventDefault();
            alert(`Confirmation email sent to ${this.state.email}`);
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
