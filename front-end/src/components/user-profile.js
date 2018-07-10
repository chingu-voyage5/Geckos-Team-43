import React from "react";
import { MyContext } from "../containers/context.js";
import { Button } from "react-materialize";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";
import Loading from "./Loading";
import { Redirect } from "react-router";

const UserProfile = () => (
  <MyContext.Consumer>
    {({ updateAccount, state }) => (
      <div className="user-profile wrapper">
        <div className="user-info">
          <h1>{state.name}</h1>
          <p>
            <b>Location:</b>
            <br />
            {state.location}
          </p>
          <p>
            <b>Email:</b>
            <br />
            {state.email}
          </p>
          <p>
            <b>Leetup member since:</b>
            <br /> April 1 2018
          </p>
        </div>
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <p>{state.interests}</p>
        </div>
        <div className="user-bio">
          <p>{state.bio ? state.bio : ""}</p>
          <Button className="addBio" waves="light" onClick={updateAccount}>
            Update Account
          </Button>
        </div>
        {state.redirect ? <Redirect to="/edit" /> : null}
      </div>
    )}
  </MyContext.Consumer>
);

export default UserProfile;
