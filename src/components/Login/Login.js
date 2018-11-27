import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo.png';
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        <header className="signup-header">
          <NavLink to="/">
            <img className="login-logo" src={logo} alt="logo" />
          </NavLink>
        </header>
        <form className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
