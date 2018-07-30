import React from "react";
import { MyContext } from "./context.js";
import "./index.css";
import { Breadcrumb, MenuItem, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import NotLogged from "../components/NotLogged";

const AddEvent = () => (
  <MyContext.Consumer>
    {({ goBackToProfile, handleChange, handleCreateEvent, state }) =>
      state.loggedIn ? (
        <div className="wrapper">
          <Breadcrumb>
            <MenuItem>
              <Button onClick={goBackToProfile}>Back to Profile</Button>
            </MenuItem>
          </Breadcrumb>
          <div>
            <h5>Create an Event</h5>
          </div>
          <form onSubmit={handleCreateEvent}>
            <input
              name="eventTitle"
              placeholder="Add Event Title"
              type="text"
              onChange={handleChange}
              value={state.eventTitle}
            />
            <input
              name="eventOwner"
              placeholder="Add Event Host"
              type="text"
              onChange={handleChange}
              value={state.eventOwner}
            />
            <input
              name="eventDate"
              placeholder="Add Event Date"
              type="text"
              onChange={handleChange}
              value={state.eventDate}
            />
            <input
              name="eventType"
              placeholder="Add Event Type"
              type="text"
              onChange={handleChange}
              value={state.eventType}
            />
            <input
              name="eventLocation"
              placeholder="Add Event Location"
              type="text"
              onChange={handleChange}
              value={state.eventLocation}
            />
            <textarea
              name="eventDetails"
              placeholder="Add Event Description"
              onChange={handleChange}
              value={state.eventDetails}
            />
            <input type="submit" className="btn" value="Create Event" />
          </form>
          {state.redirect ? <Redirect to={`/event/${state.eventId}`} /> : ""}
        </div>
      ) : (
        <NotLogged />
      )
    }
  </MyContext.Consumer>
);

export default AddEvent;
