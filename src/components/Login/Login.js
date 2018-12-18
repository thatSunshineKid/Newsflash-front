import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo-light.png';
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <header className="login-header">
          <NavLink to="/">
            <img className="login-logo" src={logo} alt="logo" />
          </NavLink>
          <NavLink className="sign-up-home-link" to="/">
            Home
          </NavLink>
        </header>
        <form className="login-form">
          <h2 className="form-login-header">Login</h2>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button className="login-button">Login</button>
          <div className="login-link-container">
            <NavLink className="login-form-link" to="/sign-up">
              Sign Up
            </NavLink>
            <NavLink className="login-form-link" to="/">
              Forgot Password?
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}
