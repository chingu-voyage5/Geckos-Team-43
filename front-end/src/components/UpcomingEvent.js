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
        <br />
        <strong>
          Posted on: {moment(state.eventDate).format("MM/DD/YYYY")}
        </strong>
        <br />
        <strong>
          Venue<Link to={"/"}>{state.eventLocation}</Link>
        </strong>
      </div>
    )}
  </MyContext.Consumer>
);

const EventDetails = () => (
  <MyContext.Consumer>
    {state => (
      <div className="event-details">
        <p>{moment(state.eventDate).format("MM/DD/YYYY")}</p>
        <h4>
          <Link to={`{state.eventTitle}`}>{state.eventTitle}</Link>
        </h4>
        <strong>
          Hosted by <Link to={"/"}>{state.eventOwner}</Link>
        </strong>
        <p>{state.eventDetails}</p>
        <strong>Attendees</strong>
        <p>{state.eventParticipants ? "" : "There are no attendees"}</p>
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
