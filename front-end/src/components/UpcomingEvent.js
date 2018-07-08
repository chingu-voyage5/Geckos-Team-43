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
        <Link to={"/my-book-club-123"} className="brand">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Button>Attend</Button>
        <p>Posted on: Monday, June 25</p>
        <p>
          Venue<Link to={"/"}>ABC 123 Street</Link>
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
        <h4>
          <Link to={"/my-book-club-123"}>My Book Club</Link>
        </h4>
        <p>
          Hosted by <Link to={"/"}>John Smith</Link>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          distinctio nulla eos cupiditate at laboriosam facere quaerat, quasi
          non et cumque totam expedita! Ex maiores, sequi obcaecati odit enim
          dolorum?
        </p>
        <p>Attendees</p>
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
      </div>
    )}
  </MyContext.Consumer>
);

const UpcomingEvent = () => (
  <MyContext.Consumer>
    {user => (
      <div className="upcoming-event-card card">
        <EventImage />
        <EventDetails />
        <HostDetails />
      </div>
    )}
  </MyContext.Consumer>
);

export default UpcomingEvent;
