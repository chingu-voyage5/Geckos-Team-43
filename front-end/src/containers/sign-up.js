import React from 'react';
import { MyContext } from './context.js'; //importing the context
import './App.css';

// login can be a stateless component now since it just receives the props from the Context
const Signup = () => (

      //anything wrapped inside MyContext.Consumer will receive the props from the global context
            <MyContext.Consumer>
              {user => (
                <div className="signup-box">
                <div className="navbar"><p>Signup</p></div>
                <form onSubmit={user.handleSubmit} className="signup-form">
                <input name="name" onChange={user.handleChange} value={user.state.name} placeholder="Name" type="text"/>
                  <input name="email" onChange={user.handleChange} value={user.state.email} placeholder="Email" type="text"/>
                  <input name="password" onChange={user.handleChange} value={user.state.password} placeholder="Password" type="text"/>
                  <input type="submit"/>
                </form>
               </div>
                )}
            </MyContext.Consumer>      
  )

export default Signup;