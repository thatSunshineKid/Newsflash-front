import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { toggleStickyNav } from '../../utils/toggleStickyNav.js';
import './NavBar.css';

export default class NavBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleNav);
  }

  handleNav = () => {
    toggleStickyNav();
  };

  render() {
    return (
      <nav className="navbar-container">
        <NavLink className="navbar-link link-1" to="/trending">
          Trending
        </NavLink>
        <NavLink className="navbar-link link-2" to="/politics">
          Politics
        </NavLink>
        <NavLink className="navbar-link link-3" to="/business">
          Business
        </NavLink>
        <NavLink className="navbar-link link-4" to="/sports">
          Sports
        </NavLink>
        <NavLink className="navbar-link link-5" to="/health">
          Health
        </NavLink>
        <NavLink className="navbar-link link-6" to="/tech">
          Tech
        </NavLink>
        <NavLink className="navbar-link link-7" to="/food">
          Food
        </NavLink>
        <NavLink className="navbar-link link-8" to="/travel">
          Travel
        </NavLink>
      </nav>
    );
  }
}
