import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo.png';
import Search from '../Search/Search';
import StoryContainer from '../StoryContainer/StoryContainer';
import NavBar from '../NavBar/NavBar';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <header className="home-header">
          <img className="home-logo" src={logo} alt="logo" />
          <h2>Good Morning, Kurt.</h2>
          <div>
            <NavLink to="/">Sign Up</NavLink>
            <NavLink to="/">Login</NavLink>
          </div>
        </header>
        <Search />
        <NavBar />
        <StoryContainer />
      </div>
    );
  }
}
