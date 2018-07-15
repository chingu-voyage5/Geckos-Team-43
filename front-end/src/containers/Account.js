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
    {({ goBackToProfile, handleUpdate, handleChange, state }) => (
      <div className="wrapper">
        <Breadcrumb>
          <MenuItem>
            <Button onClick={goBackToProfile}>Back to Profile</Button>
          </MenuItem>
        </Breadcrumb>
        <div className="">
          <h5>Account Settings</h5>
          <form onSubmit={handleUpdate}>
            <Row>
              <Input
                s={8}
                label="Full Name"
                onChange={handleChange}
                name="name"
                validate
                placholder="Your Full Name"
                defaultValue={state.name}
              />
              <Input
                s={8}
                label="Email"
                onChange={handleChange}
                name="email"
                validate
                placholder="Your Email"
                defaultValue={state.email}
              />
              <Input
                s={8}
                label="Username"
                onChange={handleChange}
                name="handle"
                validate
                placholder="Your Username"
                defaultValue={state.handle}
              />
              <Input
                s={8}
                label="Location"
                onChange={handleChange}
                name="location"
                validate
                placholder="Your Location"
                defaultValue={state.location}
              />
              <Input
                type="password"
                s={8}
                label="Password"
                onChange={handleChange}
                name="password"
                validate
                placholder="Your Password"
                defaultValue={state.password}
              />
              <Input
                s={8}
                label="Member Since"
                onChange={handleChange}
                defaultValue="April 1 2018"
                disabled
              />
              <Input
                s={8}
                label="Interests"
                onChange={handleChange}
                name="interests"
                type="textarea"
              />
              <Input
                s={8}
                label="Bio"
                onChange={handleChange}
                name="bio"
                defaultValue={state.bio}
                type="textarea"
              />
              <Input
                s={12}
                label="Photo"
                name="photo"
                type="file"
                className="photo"
              />
              <Input
                type="submit"
                name="email"
                defaultValue="Submit"
                className="blue btn"
              />
            </Row>
          </form>
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
