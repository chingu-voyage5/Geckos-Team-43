import React from "react";
import { MyContext } from "./context.js"; //importing the context
import "./index.css";
import { Redirect } from "react-router";

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
            type="password"
          />
          <input type="submit" className="btn" value="Login" />
        </form>
        {user.fireRedirect && <Redirect to={"/user/12345"} />}
      </div>
    )}
  </MyContext.Consumer>
);

export default Login;
