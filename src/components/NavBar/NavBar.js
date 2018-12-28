import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleNav);
  }

  handleNav = () => {
    const nav = document.querySelector('.navbar-container');

    const header = document.querySelector('.home-header');

    let topOfNav = nav.offsetTop;

    if (window.pageYOffset >= topOfNav) {
      document.body.style.marginTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    }

    if (window.pageYOffset <= header.offsetHeight) {
      document.body.classList.remove('fixed-nav');
      document.body.style.marginTop = 0;
    }
  };

  render() {
    return (
      <nav className="navbar-container">
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
      </nav>
    );
  }
}
