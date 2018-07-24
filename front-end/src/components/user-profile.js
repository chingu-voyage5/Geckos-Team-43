import React from "react";
import { MyContext } from "../containers/context.js";
import { Button, Chip } from "react-materialize";
import "../containers/index.css";
import Loading from "./Loading";
import { Redirect } from "react-router";
import NotLogged from "./NotLogged";
import { Link } from "react-router-dom";

const UserProfile = () => (
  <MyContext.Consumer>
    {({ updateAccount, state }) =>
      state.loggedIn ? (
        state.loading === true ? (
          <Loading />
        ) : (
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
                <br /> {state.dateJoined}
              </p>
            </div>
            <div className="img-container">
              <img src={state.userProfile} alt="" />
            </div>
            <div className="interests">
              <h3>Interests</h3>
              <div className="wrapper">
                {state.interests
                  ? state.interests
                      .split(",")
                      .map(interest => (
                        <Chip key={interest.id}>{interest}</Chip>
                      ))
                  : "Add your interests"}
              </div>
            </div>
            <div className="skills">
              <h3>skills</h3>
              <div className="wrapper">
                {state.skills
                  ? state.skills
                      .split(",")
                      .map(skill => <Chip key={skill.id}>{skill}</Chip>)
                  : "Add your skills"}
              </div>
            </div>
            <div className="more-info">
              <div>
                <strong>Company</strong>
                <p>
                  {state.company ? state.company : "Update to add company name"}
                </p>
              </div>
              <div>
                <strong>Website</strong>
                {state.website ? (
                  <p>
                    <Link to={state.website} target="_blank">
                      {state.website}
                    </Link>
                  </p>
                ) : (
                  <p>Update to add website link</p>
                )}
              </div>
              <div>
                <strong>Github Username</strong>
                <p>
                  {state.githubusername
                    ? state.githubusername
                    : "Update to add Github Username"}
                </p>
              </div>
            </div>
            <div className="user-bio">
              <p>{state.bio ? state.bio : "Update to add bio"}</p>
              <Button className="addBio" waves="light" onClick={updateAccount}>
                Update Account
              </Button>
            </div>
            {state.redirect ? <Redirect to="/edit" /> : null}
          </div>
        )
      ) : (
        <NotLogged />
      )
    }
  </MyContext.Consumer>
);

export default UserProfile;
