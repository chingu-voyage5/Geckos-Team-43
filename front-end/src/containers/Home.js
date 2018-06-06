import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./index.css";

function Banner(props) {
  return (
    <div className="banner">
      <h2>{props.title}</h2>
      <h5>{props.tagline}</h5>
      <Link to={"/signup"} className="btn">
        {props.signup}
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header title="Leet Up" login="Login" signup="Sign Up" />
      <Banner
        title="What do you love?"
        tagline="Do more of it with Meetup"
        signup="Sign Up"
      />
    </div>
  );
}
