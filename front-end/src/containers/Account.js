import React from "react";
import { MyContext } from "./context.js";
import "./index.css";
import { Redirect } from "react-router-dom";
import { MenuItem, Row, Input, Button } from "react-materialize";
import NotLogged from "../components/NotLogged";
import DeleteConfirmation from "../components/DeleteConfirmation";
import moment from "moment";

const Account = () => (
  <MyContext.Consumer>
    {({
      goBackToProfile,
      handleUpdateProfile,
      handleUpdateUser,
      handleChange,
      openDeleteConfirmation,
      state
    }) =>
      state.loggedIn ? (
        <div className="wrapper">
          <MenuItem className="back-button">
            <Button onClick={goBackToProfile}>
              <i className="fas fa-long-arrow-alt-left" />
            </Button>
          </MenuItem>

          <div className="">
            <h5>Account Settings</h5>
            <form onSubmit={handleUpdateUser}>
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
                  defaultValue={moment(state.dateJoined).format("MM/DD/YYYY")}
                  disabled
                />
                <Input
                  s={8}
                  type="submit"
                  name="email"
                  defaultValue="Save"
                  className="blue btn"
                />
              </Row>
            </form>
          </div>

          <div className="">
            <h5>Profile Settings</h5>
            <form onSubmit={handleUpdateProfile}>
              <Row>
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
                  s={8}
                  label="GithubUsername"
                  onChange={handleChange}
                  name="githubusername"
                  placholder="Your Github Username"
                  defaultValue={state.githubusername}
                />
                <Input
                  s={8}
                  label="Company"
                  onChange={handleChange}
                  name="company"
                  placholder="Your Company name"
                  defaultValue={state.company}
                />
                <Input
                  s={8}
                  label="Website"
                  onChange={handleChange}
                  name="website"
                  placholder="Your website"
                  defaultValue={state.website}
                />
                <Input
                  s={8}
                  label="Interests"
                  onChange={handleChange}
                  name="interests"
                  defaultValue={state.interests}
                  type="textarea"
                />
                <Input
                  s={8}
                  label="Skills"
                  onChange={handleChange}
                  name="skills"
                  defaultValue={state.skills}
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
                  s={8}
                  type="submit"
                  name="email"
                  defaultValue="Save"
                  className="blue btn"
                />
              </Row>
            </form>
            <div className="danger">
              <hr />
              <h6>Only proceed if you would like to close your account</h6>
              <Button
                waves="light"
                className="red"
                onClick={openDeleteConfirmation}
              >
                Delete Your Account
              </Button>
              {state.deleteAccount === true ? <DeleteConfirmation /> : ""}
            </div>
          </div>
          {state.redirect ? <Redirect to={`/user/${state.userId}`} /> : ""}
        </div>
      ) : (
        <NotLogged />
      )
    }
  </MyContext.Consumer>
);

export default Account;
