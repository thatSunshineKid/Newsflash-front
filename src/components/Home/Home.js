import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo.png';
import Search from '../Search/Search';
import StoryContainer from '../StoryContainer/StoryContainer';
import NavBar from '../NavBar/NavBar';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      time: ''
    };
  }

  render() {
    return (
      <div className="home-container">
        <header className="home-header">
          <img className="home-logo" src={logo} alt="logo" />
          <h2 className="home-greeting">Good Morning, Kurt.</h2>
          <div>
            <NavLink className="sign-up-link" to="/sign-up">
              Sign Up
            </NavLink>
            <NavLink className="login-link" to="/login">
              Login
            </NavLink>
          </div>
        </header>
        <Search />
        <NavBar />
        <StoryContainer />
      </div>
    );
  }
}
