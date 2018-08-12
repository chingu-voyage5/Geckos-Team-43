import React from "react";
import { MyContext } from "../containers/context.js";
import { Col, Card } from "react-materialize";
import "../containers/index.css";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import moment from "moment";

const HostDetails = ({datePosted}) => (
      <div className="host-details">
        <strong>
          Posted on: {moment(datePosted).format('"MM/DD/YYYY"')}
        </strong>
        <br />
        <strong>
          Hosted by <Link to={"/"}>Some owner</Link>
        </strong>
      </div>
);

const EventDetails = ({date, title}) => (
      <div className="event-details">
        <p>{moment(date).format('"MM/DD/YYYY"')}</p>
        <p>
          <Link to={`{state.eventTitle}`}>{title}</Link>
        </p>
      </div>
);

const EventBanner = () => (
  <MyContext.Consumer>
    {({state}) => (
      <Col m={7} s={12}>
        <Card
          vertical
          header={<img src={logo} className="logo" alt="logo" />}
          actions={[<a href="/">Share this event</a>]}
        >
          <strong>{state.eventTitle}</strong>
          <EventDetails date={state.eventDate} title={state.eventTitle}/>
          <HostDetails datePosted={state.eventDate}/>
        </Card>
      </Col>
    )}
  </MyContext.Consumer>
);

export default EventBanner;
