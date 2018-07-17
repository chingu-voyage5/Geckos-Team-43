import React from "react";
import { MyContext } from "./context.js";
import logo from "../images/LeetUplogo.png";
import "./index.css";

const AddEvent = () => (
  <MyContext.Consumer>
    {({ state }) => (
      <div className="wrapper">
        <h5>Create a new Event</h5>
      </div>
    )}
  </MyContext.Consumer>
);

export default AddEvent;
