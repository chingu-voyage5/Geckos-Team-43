import React from "react";
import { MyContext } from "./context.js";
import logo from "../images/LeetUplogo.png";
import "./index.css";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  MenuItem,
  Row,
  Input,
  Button,
  Col,
  Tag
} from "react-materialize";

const Account = () => (
  <MyContext.Consumer>
    {({ state }) => (
      <div className="wrapper">
        <Breadcrumb>
          <MenuItem>
            <Link to={`/user/${state.userId}`}>Back to Profile</Link>
          </MenuItem>
        </Breadcrumb>
        <div className="">
          <h5>Account Settings</h5>
          <Row>
            <Input
              s={8}
              label="Full Name"
              validate
              placholder="Your Full Name"
              defaultValue={state.name}
            />
            <Input
              s={8}
              label="Email"
              validate
              placholder="Your Email"
              defaultValue={state.email}
            />
            <Input
              s={8}
              label="Location"
              validate
              placholder="Your Location"
              defaultValue={state.location}
            />
            <Input
              type="password"
              s={8}
              label="Password"
              validate
              placholder="Your Password"
              defaultValue={state.password}
            />
            <Input
              s={8}
              label="Member Since"
              defaultValue="April 1 2018"
              disabled
            />
            <Input s={8} label="Interests" type="textarea" />
            <Input s={8} label="Bio" defaultValue={state.bio} type="textarea" />
            <Input s={12} label="Photo" type="file" className="photo" />
            <Input type="submit" value="Submit" className="blue btn" />
          </Row>
          <div className="danger">
            <hr />
            <h6>Only proceed if you would like to close your account</h6>
            <Button waves="light" className="red">
              Delete Your Account
            </Button>
          </div>
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

export default Account;
