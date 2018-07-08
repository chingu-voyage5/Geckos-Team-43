import React from "react";
import { MyContext } from "./context.js";
import { Button } from "react-materialize";
import logo from "../images/LeetUplogo.png";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const EventPage = () => (
  <MyContext.Consumer>
    {state => (
      <div>
        <Header title="Leet Up" login="Login" signup="Sign Up" />
        <div className="event-profile wrapper">
          <div className="event-details">
            <h1>Event Title</h1>
            <EventCard />
            <h6>Event Location</h6>
            <h6>Number of Attendees</h6>
          </div>
          <div className="rsvp">
            <p>56 going</p>
            <button className="btn">Going</button>
            <button className="btn">Not interested</button>
          </div>
          <div className="event-info">
            <h2>What we're about</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              sapiente. Impedit inventore accusantium molestiae earum vero
              reiciendis rem voluptates, similique veritatis dignissimos minus
              saepe totam ex dolorum maiores facilis nobis.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, necessitatibus nisi! Dolorem quas voluptatem enim ea
              obcaecati, officia aspernatur blanditiis, aperiam accusamus iusto,
              temporibus vero rem cum voluptatibus libero nobis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione repellendus culpa sunt illum dolores quis qui
              necessitatibus accusantium dicta inventore doloribus voluptatibus
              natus, quidem alias error ab impedit deleniti!
            </p>
          </div>
        </div>
        <Footer title="Leet Up" />
      </div>
    )}
  </MyContext.Consumer>
);

export default EventPage;