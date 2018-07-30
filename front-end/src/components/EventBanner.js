import React from "react";
import { MyContext } from "../containers/context.js";
import { Col, Card } from "react-materialize";
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
        <p>{moment(state.eventDate).format("MM/DD/YYYY")} 10pm</p>
        <p>
          <Link to={`{state.eventTitle}`}>{state.eventTitle}</Link>
        </p>
      </div>
    )}
  </MyContext.Consumer>
);

const EventBanner = () => (
  <MyContext.Consumer>
    {state => (
      <Col m={7} s={12}>
        <Card
          horizontal
          header={<img src={logo} className="logo" alt="logo" />}
          actions={[<a href="/">Share this event</a>]}
        >
          <h5>{state.eventTitle}</h5>
          <EventDetails />
          <HostDetails />
        </Card>
      </Col>
    )}
  </MyContext.Consumer>
);

export default EventBanner;
