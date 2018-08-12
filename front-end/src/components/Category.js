import React from "react";
import { MyContext } from "../containers/context.js";
import "../containers/index.css";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";
import { PromiseProvider } from "mongoose";

const CategoryCard = props => (
  <MyContext.Consumer>
    {user => (
      <div className="category-brand">
        <Link to={"/"} className="brand">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <p>{props.title}</p>
      </div>
    )}
  </MyContext.Consumer>
);

const Category = props => (
  <MyContext.Consumer>
    {user => (
      <div className="category-card card">
        <CategoryCard title={props.catTitle} />
      </div>
    )}
  </MyContext.Consumer>
);

export default Category;
