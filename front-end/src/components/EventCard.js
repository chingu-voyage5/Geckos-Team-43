import React from "react";
import { MyContext } from "../containers/context.js";
import "../containers/index.css";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import moment from "moment";

const HostDetails = () => (
  <MyContext.Consumer>
    {state => (
      <div className="host-details">
        <p>Posted on: {moment(state.eventDate).format("MM/DD/YYYY")}</p>
        <p>
          Hosted by <Link to={"/"}>{state.eventOwner}</Link>
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
        <p>
          <Link to={`{state.eventTitle}`}>{state.eventTitle}</Link>
        </p>
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
        <Link to={`/event/{state.eventTitle}`} className="brand">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
    )}
  </MyContext.Consumer>
);

const EventCard = () => (
  <MyContext.Consumer>
    {state => (
      <div className="event-card card">
        <EventImage />
        <EventDetails />
        <HostDetails />
      </div>
    )}
  </MyContext.Consumer>
);

export default EventCard;
