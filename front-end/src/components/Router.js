import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../containers/App";
import Home from "../containers/Home";
import Signup from "../containers/sign-up";
import Login from "../containers/login";
import { MyProvider } from '../containers/context.js';//All consumers point to the nearest provider

const Router = () => {
  return (
    //Provider "provides" all MyContext.Consumer inside its scope with global data
    
const Router = () => {
  return (
    <MyProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </MyProvider>  
  );
};

export default Router;
