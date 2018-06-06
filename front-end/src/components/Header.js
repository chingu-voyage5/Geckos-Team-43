import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";

export default function Header(props) {
  return (
    <header>
      <Link to={"/"} className="brand">
        <img src={logo} className="logo" alt="logo" />
        <h1>{props.title}</h1>
      </Link>
      <nav>
        <Link to={"/login"}>{props.login}</Link>
        <Link to={"/signup"}>{props.signup}</Link>
      </nav>
    </header>
  );
}
