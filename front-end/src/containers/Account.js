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
    {user => (
      <div className="wrapper">
        <Breadcrumb>
          <MenuItem>
            <Link to={`/user/${user.state.userId}`}>Back to Profile</Link>
          </MenuItem>
        </Breadcrumb>
        <div className="">
          <h5>Account Settings</h5>
          <form onSubmit={user.handleUpdate}>
            <Row>
              <Input
                s={8}
                label="Full Name"
                onChange={user.handleChange}
                name="name"
                validate
                placholder="Your Full Name"
                defaultValue={user.state.name}
              />
              <Input
                s={8}
                label="Email"
                onChange={user.handleChange}
                name="email"
                validate
                placholder="Your Email"
                defaultValue={user.state.email}
              />
              <Input
                s={8}
                label="Location"
                onChange={user.handleChange}
                name="location"
                validate
                placholder="Your Location"
                defaultValue={user.state.location}
              />
              <Input
                type="password"
                s={8}
                label="Password"
                onChange={user.handleChange}
                name="password"
                validate
                placholder="Your Password"
                defaultValue={user.state.password}
              />
              <Input
                s={8}
                label="Member Since"
                onChange={user.handleChange}
                defaultValue="April 1 2018"
                disabled
              />
              <Input
                s={8}
                label="Interests"
                onChange={user.handleChange}
                name="interests"
                type="textarea"
              />
              <Input
                s={8}
                label="Bio"
                onChange={user.handleChange}
                name="bio"
                defaultValue={user.state.bio}
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
