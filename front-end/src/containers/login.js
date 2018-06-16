import React from "react";
import { MyContext } from "./context.js"; //importing the context
import "./App.css";
import { Link, Route } from "react-router-dom";

// login can be a stateless component now since it just receives the props from the Context
const Login = () => (
  //anything wrapped inside MyContext.Consumer will receive the props from the global context
  <MyContext.Consumer>
    {user => (
      <div className="signup-box">
        <div className="navbar">
          <p>Login</p>
        </div>
        <form onSubmit={user.handleLogin} className="signup-form">
          <input
            name="email"
            onChange={user.handleChange}
            value={user.state.email}
            placeholder="Email"
            type="text"
          />
          <input
            name="password"
            onChange={user.handleChange}
            value={user.state.password}
            placeholder="Password"
            type="text"
          />
          <input type="submit" />
        </form>
      </div>
    )}
  </MyContext.Consumer>
);

export default Login;
