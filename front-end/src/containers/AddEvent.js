import React from "react";
import { MyContext } from "./context.js";
import "./index.css";
import { MenuItem, Button } from "react-materialize";
import { Redirect } from "react-router-dom";
import NotLogged from "../components/NotLogged";

const AddEvent = () => (
  <MyContext.Consumer>
    {({ goBackToProfile, handleChange, handleCreateEvent, state }) =>
      state.loggedIn ? (
        <div className="wrapper">
          <MenuItem className="back-button">
            <Button onClick={goBackToProfile}>
              <i class="fas fa-long-arrow-alt-left" />
            </Button>
          </MenuItem>
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
              required
              minlength="10"
              maxlength="60"
            />
            <input
              name="eventOwner"
              placeholder="Add Event Host"
              type="text"
              onChange={handleChange}
              value={state.eventOwner}
              required
            />
            <input
              name="eventDate"
              placeholder="Add Event Date"
              type="text"
              onChange={handleChange}
              value={state.eventDate}
              required
              pattern="^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$"
            />
            <input
              name="eventType"
              placeholder="Add Event Type"
              type="text"
              onChange={handleChange}
              value={state.eventType}
              required
            />
            <input
              name="eventLocation"
              placeholder="Add Event Location"
              type="text"
              onChange={handleChange}
              value={state.eventLocation}
              required
              minlength="10"
              maxlength="100"
            />
            <textarea
              name="eventDetails"
              placeholder="Add Event Description"
              onChange={handleChange}
              value={state.eventDetails}
              required
              minlength="10"
              maxlength="600"
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
