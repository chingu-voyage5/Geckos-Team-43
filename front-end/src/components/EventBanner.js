import React from "react";
import { MyContext } from "../containers/context.js";
import { Col, Card } from "react-materialize";
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
          <Link to={"/my-book-club-123"}>My Book Club</Link>
        </p>
      </div>
    )}
  </MyContext.Consumer>
);

const EventBanner = () => (
  <MyContext.Consumer>
    {user => (
      <Col m={7} s={12}>
        <Card
          horizontal
          header={<img src={logo} className="logo" alt="logo" />}
          actions={[<a href="/">Share this event</a>]}
        >
          <h5>Event Title</h5>
          <EventDetails />
          <HostDetails />
        </Card>
      </Col>
    )}
  </MyContext.Consumer>
);

export default EventBanner;
