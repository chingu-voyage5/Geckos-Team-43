import React from "react";
import { MyContext } from "../containers/context.js";
import { Button } from "react-materialize";
import "../containers/index.css";
import { Link } from "react-router-dom";
import logo from "../images/LeetUplogo.png";

const CategoryCard = () => (
  <MyContext.Consumer>
    {user => (
      <div className="category-brand">
        <Link to={"/"} className="brand">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <p>Outdoors & Adventure</p>
      </div>
    )}
  </MyContext.Consumer>
);

const Category = () => (
  <MyContext.Consumer>
    {user => (
      <div className="category-card card">
        <CategoryCard />
      </div>
    )}
  </MyContext.Consumer>
);

export default Category;
