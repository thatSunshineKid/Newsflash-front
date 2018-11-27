import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo.png';
import './SignUp.css';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <header className="signup-header">
          <NavLink to="/">
            <img className="search-logo" src={logo} alt="logo" />
          </NavLink>
        </header>
        <form className="signup-form">
          <h2>Sign Up</h2>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
