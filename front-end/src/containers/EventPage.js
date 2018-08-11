import React from "react";
import { MyContext } from "./context.js";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBanner from "../components/EventBanner";
import UpcomingEvent from "../components/UpcomingEvent";

class EventPage extends React.Component {
  componentDidMount() {
    fetch(`api/posts/${MyContext.eventId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }
  render() {
    return (
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

              {state.eventDetails ? (
                <div className="event-info">
                  <h2>What we're about</h2>
                  <p>{state.eventDetails}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <Footer title="Leet Up" />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default EventPage;
