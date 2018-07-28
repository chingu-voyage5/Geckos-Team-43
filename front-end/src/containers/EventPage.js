import React from "react";
import { MyContext } from "./context.js";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBanner from "../components/EventBanner";
import UpcomingEvent from "../components/UpcomingEvent";

const EventPage = () => (
  <MyContext.Consumer>
    {state => (
      <div>
        <Header title="Leet Up" login="Login" signup="Sign Up" />
        <div className="event-profile wrapper">
          <div className="event-details">
            <EventBanner />
            <React.Fragment>
              <h5>{state.eventTitle}</h5>
              <UpcomingEvent />
            </React.Fragment>
          </div>
          <div className="event-info">
            <h2>What we're about</h2>
            <p>{state.eventDetails}</p>
          </div>
        </div>
        <Footer title="Leet Up" />
      </div>
    )}
  </MyContext.Consumer>
);

export default EventPage;
