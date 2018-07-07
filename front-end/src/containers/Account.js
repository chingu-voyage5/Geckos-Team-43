import React from "react";
import { MyContext } from "./context.js";
import { Row, Input, Button, Col, Tag } from "react-materialize";
import logo from "../images/LeetUplogo.png";
import "./index.css";

const Account = () => (
  <MyContext.Consumer>
    {({ state }) => (
      <div className="wrapper">
        <Button className="red" waves="light" icon="arrow_back">
          Back
        </Button>
        <div className="">
          <h5>Account Settings</h5>
          <Row>
            <Input
              s={12}
              label="Full Name"
              validate
              placholder="Your Full Name"
              defaultValue={state.name}
            />
            <Input
              s={12}
              label="Email"
              validate
              placholder="Your Email"
              defaultValue={state.email}
            />
            <Input
              s={12}
              label="Location"
              validate
              placholder="Your Location"
            />
            <Input
              type="password"
              s={12}
              label="Password"
              validate
              placholder="Your Password"
              defaultValue={state.password}
            />
            <Input
              s={12}
              label="Member Since"
              defaultValue="April 1 2018"
              disabled
            />
            <Input s={12} label="Interests" type="textarea" />
            <Input
              s={12}
              label="Bio"
              defaultValue={state.bio}
              type="textarea"
            />
            <Input s={12} label="Photo" type="file" className="photo" />
            <Input type="submit" value="Submit" className="blue" />
            {/* <Button className="blue" waves="light">
              Back
            </Button> */}
          </Row>
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

export default Account;
