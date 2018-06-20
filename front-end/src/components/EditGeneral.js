import React from "react";
import { MyContext } from "../containers/context.js";
import Header from "./Header";
import { Button } from "react-materialize";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";

const EditGeneral = () => (
  <MyContext.Consumer>
    {user => (
      <div className="user-profile wrapper">
        <div className="user-info">
          <p>
            <b>Name:</b>
            <br />
            {user.state.name}
          </p>
          <p>
            <b>Location:</b>
            <br />New York City
          </p>
          <p>
            <b>Email:</b>
            <br />
            {user.state.email}
          </p>
          <p>
            <b>Leetup member since:</b>
            <br /> April 1 2018
          </p>
        </div>
        <div className="user-bio">
          <p>{user.state.bio ? user.state.bio : ""}</p>
          <Button waves="light" onClick={user.editProfile}>
            Edit Profile
          </Button>
        </div>
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

export default EditGeneral;
