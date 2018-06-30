import React from "react";
import { MyContext } from "../containers/context.js";
import { Button } from "react-materialize";
import "../containers/index.css";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";

const Steps = () => (
  <MyContext.Consumer>
    {user => (
      <div className="title-card">
        <img src={logo} className="icon" alt="icon" />
        <div>
          <h5 id="step-title">Find a LeetUp</h5>
          <p>Discover local Meetups for all the things you love.</p>
          <Link to={"/"} className="button">
            <button>Sign Up →</button>
          </Link>
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

const UserInfoBanner = () => (
  <MyContext.Consumer>
    {user => (
      <div className="user-guide">
        <div className="wrapper">
          <h3>How LeetUp Works</h3>
          <div className="user-info">
            <Steps />
            <Steps />
          </div>
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

export default UserInfoBanner;
