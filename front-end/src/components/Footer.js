import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";
import { MyContext } from "../containers/context.js"; //importing the context

class Footer extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {user => (
          <footer className="footer">
            <Link to={"/"}> &copy; 2018 </Link>
            <Link to={"/"} className="brand">
              <h6>{this.props.title}</h6>
            </Link>
          </footer>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Footer;
