import React from "react";
import { MyContext } from "./context.js";
import { Row, Input, Button } from "react-materialize";
import logo from "../images/LeetUplogo.png";
import "./index.css";

const Account = () => (
  <MyContext.Consumer>
    {({ state }) => (
      <div className="wrapper">
        <div className="">
          <h5>Account Settings</h5>
          <Row>
            <p>{state.name}</p>
            <Input
              s={6}
              label="Full Name"
              validate
              placholder="Your Full Name"
            />
            <Input s={6} label="Email" validate placholder="Your Email" />
            <Input s={6} label="Location" validate placholder="Your Location" />
            <Input
              s={6}
              label="Membership Date"
              validate
              placholder="Member Since"
            />
            <Input label="Interests" type="textarea" />
            <Input label="Bio" type="textarea" />
            <Input label="Photo" type="file" />
          </Row>
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

export default Account;
