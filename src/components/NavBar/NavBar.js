import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <NavLink to="/">Trending</NavLink>
        <NavLink to="/">Politics</NavLink>
        <NavLink to="/">Business</NavLink>
        <NavLink to="/">Sports</NavLink>
        <NavLink to="/">Health</NavLink>
        <NavLink to="/">Tech</NavLink>
        <NavLink to="/">Food</NavLink>
        <NavLink to="/">Travel</NavLink>
      </div>
    );
  }
}
