import React from "react";
import { MyContext } from "../containers/context.js";
import { Button } from "react-materialize";
import "../containers/index.css";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import moment from "moment";

const HostDetails = () => (
  <MyContext.Consumer>
    {state => (
      <div className="host-details">
        <Link to={"/my-book-club-123"} className="brand">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Button>Attend</Button>
        <p>Posted on: {moment(state.eventDate).format("MM/DD/YYYY")}</p>
        <p>
          Venue<Link to={"/"}>{state.eventLocation}</Link>
        </p>
      </div>
    )}
  </MyContext.Consumer>
);

const EventDetails = () => (
  <MyContext.Consumer>
    {state => (
      <div className="event-details">
        <p>{moment(state.eventDate).format("MM/DD/YYYY")}, 6:30pm</p>
        <h4>
          <Link to={`{state.eventTitle}`}>{state.eventTitle}</Link>
        </h4>
        <p>
          Hosted by <Link to={"/"}>{state.eventOwner}</Link>
        </p>
        <p>{state.eventDetails}</p>
        <p>Attendees</p>
        {state.eventParticipants ? "has attendees" : "no attendees"}
      </div>
    )}
  </MyContext.Consumer>
);

const EventImage = () => (
  <MyContext.Consumer>
    {state => (
      <div className="event-brand">
        <p className="card event-date">
          <span className="date">{moment(state.eventDate).format("DD")}</span>
          {moment(state.eventDate).format("MMM")}
        </p>
      </div>
    )}
  </MyContext.Consumer>
);

const UpcomingEvent = () => (
  <MyContext.Consumer>
    {state => (
      <div className="upcoming-event-card card">
        <EventImage />
        <EventDetails />
        <HostDetails />
      </div>
    )}
  </MyContext.Consumer>
);

export default UpcomingEvent;
