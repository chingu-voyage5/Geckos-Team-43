import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Welcome!");
    this.setState({ name: "", email: "", password: "" });
  }
  render() {
    return (
      <div className="signup-box">
        <Header title="Leet Up" login="Login" signup="Sign Up" />
        <form onSubmit={this.handleSubmit} className="signup-form">
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
            type="text"
          />
          <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="Email"
            type="text"
          />
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Password"
            type="text"
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default Signup;
