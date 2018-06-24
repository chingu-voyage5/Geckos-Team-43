import React from "react";
import { MyContext } from "../containers/context.js";
import { Button } from "react-materialize";
import "../containers/index.css";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";

const HostDetails = () => (
  <MyContext.Consumer>
    {user => (
      <div className="host-details">
        <p>Posted on: Monday, June 25</p>
        <p>
          Hosted by <Link to={"/"}>John Smith</Link>
        </p>
      </div>
    )}
  </MyContext.Consumer>
);

const EventDetails = () => (
  <MyContext.Consumer>
    {user => (
      <div className="event-details">
        <p>Monday, June 25, 6:30pm</p>
        <p>
          <Link to={"/"}>My Book Club</Link>
        </p>
      </div>
    )}
  </MyContext.Consumer>
);

const EventImage = () => (
  <MyContext.Consumer>
    {user => (
      <div className="event-brand">
        <p className="card event-date">
          <span className="date">25</span>JUN
        </p>
        <Link to={"/"} className="brand">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
    )}
  </MyContext.Consumer>
);

const EventCard = () => (
  <MyContext.Consumer>
    {user => (
      <div className="event-card card">
        <EventImage />
        <EventDetails />
        <HostDetails />
      </div>
    )}
  </MyContext.Consumer>
);

export default EventCard;
