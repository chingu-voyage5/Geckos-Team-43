import React from "react";
import { MyContext } from "./context.js";
import logo from "../images/LeetUplogo.png";
import "./index.css";
import { Input } from "react-materialize";

const AddEvent = () => (
  <MyContext.Consumer>
    {({ state }) => (
      <div className="wrapper">
        <div>
          <h5>Create an Event</h5>
        </div>
        <form>
          <input name="eventTitle" placeholder="Add Event Title" type="text" />
          <Input
            name="on"
            placeholder="Add Event Date"
            type="date"
            onChange={function(e, value) {}}
          />
          <input name="eventTime" placeholder="Add Event Time" type="text" />
          <input
            name="eventLocation"
            placeholder="Add Event Location"
            type="text"
          />
          <textarea
            name="eventDescription"
            placeholder="Add Event Description"
          />
          <input type="submit" className="btn" value="Create Event" />
        </form>
      </div>
    )}
  </MyContext.Consumer>
);

export default AddEvent;
