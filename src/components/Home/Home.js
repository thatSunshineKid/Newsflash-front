import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo-light.png';
import menu from '../../assets/images/menu.svg';
import Search from '../Search/Search';
import StoryContainer from '../StoryContainer/StoryContainer';
import NavBar from '../NavBar/NavBar';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      mockStories: []
    };
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3010/');

    const mockStories = await response.json();

    this.setState({
      mockStories: [...mockStories]
    });
  };

  render() {
    const { mockStories } = this.state;

    return (
      <div className="home-container">
        <header className="home-header">
          <img className="home-logo" src={logo} alt="logo" />
          <h2 className="home-greeting">Good Afternoon, Kurt.</h2>
          <div className="homepage-signup-login-container">
            <NavLink className="sign-up-link" to="/sign-up">
              Sign Up
            </NavLink>
            <NavLink className="login-link" to="/login">
              Login
            </NavLink>
            <NavLink className="login-link" to="/">
              <img src={menu} alt="menu" />
            </NavLink>
          </div>
        </header>
        <Search />
        <NavBar />
        {mockStories && <StoryContainer mockStories={mockStories} />}
      </div>
    );
  }
}
