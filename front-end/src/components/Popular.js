import React from "react";
import { MyContext } from "../containers/context.js";
import "../containers/index.css";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import Category from "./Category";

const Heading = () => (
  <MyContext.Consumer>
    {user => (
      <div className="title wrapper">
        <h1>Popular Meetups nearby</h1>
        <h5>
          <Link to={"/"}>See All</Link>
        </h5>
      </div>
    )}
  </MyContext.Consumer>
);

const ExploreHeading = () => (
  <MyContext.Consumer>
    {user => (
      <div className="title wrapper">
        <h3>Explore by category</h3>
      </div>
    )}
  </MyContext.Consumer>
);

const Popular = () => (
  <MyContext.Consumer>
    {user => (
      <div className="popular-events wrapper">
        <Heading />
        <div className="event-cards">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <ExploreHeading />
        <div className="category-cards">
          <Category catTitle="Tech Job Fair" />
          <Category catTitle="Blockchain Developers" />
          <Category catTitle="React JS Events" />
          <Category catTitle="Data Science Events" />
          <Category catTitle="Women in Tech meetups" />
          <Category catTitle="Product Management" />
          <Category catTitle="PHP Devs" />
          <Category catTitle="Ruby on Rails Events" />
          <Category catTitle="Vue JS meetups" />
          <Category catTitle="Node.js Developers" />
          <Category catTitle="UX Designers & Developers" />
          <Category catTitle="Artifical Intelligence Events" />
        </div>
      </div>
    )}
  </MyContext.Consumer>
);

export default Popular;
