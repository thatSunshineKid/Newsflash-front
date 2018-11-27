import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <NavLink className="navbar-link" to="/">
          Trending
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Politics
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Business
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Sports
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Health
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Tech
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Food
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Travel
        </NavLink>
      </div>
    );
  }
}
