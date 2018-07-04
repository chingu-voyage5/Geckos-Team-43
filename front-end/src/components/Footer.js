import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import "../containers/index.css";
import { MyContext } from "../containers/context.js"; //importing the context
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {user => (
          <footer className="footer">
            <div className="useful-links">
              <div>
                <h6>Your Account</h6>
                <ul className="account">
                  <li>
                    <Link to={"/"}>Sign Up</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Log In</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Help</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6>Discover</h6>
                <ul className="discover">
                  <li>
                    <Link to={"/"}>Groups</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Calendar</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Topics</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Cities</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6>LeetUp</h6>
                <ul className="leetup">
                  <li>
                    <Link to={"/"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <h6>Follow Us</h6>
                <ul className="social">
                  <li>
                    <Link to={"/"}>
                      <FontAwesomeIcon icon="check-square" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FontAwesomeIcon icon="check-square" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FontAwesomeIcon icon="check-square" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FontAwesomeIcon icon="check-square" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FontAwesomeIcon icon="check-square" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
