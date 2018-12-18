import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo-light.png';
import './SignUp.css';

export default class SignUp extends Component {
  render() {
    return (
      <div className="signup-container">
        <header className="signup-header">
          <NavLink to="/">
            <img className="search-logo" src={logo} alt="logo" />
          </NavLink>
          <NavLink className="sign-up-home-link" to="/">
            Home
          </NavLink>
        </header>
        <form className="signup-form">
          <h2 className="form-signup-header">Sign Up</h2>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    );
  }
}
