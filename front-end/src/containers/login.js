import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";

class Login extends Component {
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
    alert(`Confirmation email sent to ${this.state.email}`);
    this.setState({ email: "", password: "" });
  }
  render() {
    return (
      <div className="signup-box">
        <Header title="Leet Up" login="Login" signup="Sign Up" />
        <form onSubmit={this.handleSubmit} className="signup-form">
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
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default Login;
