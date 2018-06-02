import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../containers/App";
import Home from "../containers/Home";
import Signup from "../containers/sign-up";
import Login from "../containers/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
