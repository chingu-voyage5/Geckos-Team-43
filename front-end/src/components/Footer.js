import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";
import { MyContext } from "../containers/context.js"; //importing the context

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {user => (
          <footer className="footer">
            <div className="info">
              <p>
                &copy; {this.props.title} {year}
              </p>
              <p className="team">Brought to you by Geckos Team 43</p>
              <ul className="terms">
                <li>
                  <Link to={"/"}>Terms of Service</Link>
                </li>
                <li>
                  <Link to={"/"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/"}>Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </footer>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Footer;
