import React, { Component } from 'react';
import './App.css';

class Signup extends Component {
	constructor(props){
      super(props)
      this.state = { name: '', email: '', password: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({[name]: value});
    }

  handleSubmit(e) {
    e.preventDefault();
    alert('Welcome!');
    this.setState({name: '', email: '', password: ''})
  }
  render() {
    return (
      <div className="signup-box">
      		<div className="navbar"><p>Login</p></div>
            <form onSubmit={this.handleSubmit} className="signup-form">
              <input name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" type="text"/>
              <input name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" type="text"/>
              <input name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" type="text"/>
              <input type="submit"/>
            </form>
        </div>    );
  }
}

export default Signup;
