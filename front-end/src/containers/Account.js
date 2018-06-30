import React from "react";
import { MyContext } from "./context.js";
import { Button } from "react-materialize";
import logo from "../images/LeetUplogo.png";
import "./index.css";

const Account = () => (
  <MyContext.Consumer>
    {({ addBio, updateAvatar, state }) => (
      <div className="user-profile wrapper">
        <div className="user-info">
          <h1>{state.name}</h1>
        </div>
        <div className="img-container">
          <img src={logo} alt="" />
          <Button className="addBio" waves="light" onClick={updateAvatar}>
            Update Avatar
          </Button>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <form action="">
            <textarea>Interests, Interests, Interests</textarea>
            <input type="submit" value="Update Interests" />
          </form>
        </div>
        <div className="user-bio">
          <p>{state.bio ? state.bio : ""}</p>
          <Button className="addBio" waves="light" onClick={addBio}>
            Add Bio
          </Button>
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

export default Account;
