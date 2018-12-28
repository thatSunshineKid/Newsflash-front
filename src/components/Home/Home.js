import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/newsflash-logo-light.png';
import Search from '../Search/Search';
import StoryContainer from '../StoryContainer/StoryContainer';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import Backdrop from '../Backdrop/Backdrop';
import ToggleDrawerButton from '../ToggleDrawerButton/ToggleDrawerButton';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      mockStories: [],
      drawerOpen: false
    };
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3010/');

    const mockStories = await response.json();

    this.setState({
      mockStories: [...mockStories]
    });
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    const { mockStories, drawerOpen } = this.state;

    return (
      <div className="home-container">
        <Sidebar display={drawerOpen} />
        {drawerOpen && <Backdrop toggleDrawer={this.toggleDrawer} />}
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
            <ToggleDrawerButton toggleDrawer={this.toggleDrawer} />
          </div>
        </header>
        <NavBar />
        <Search />
        {mockStories && <StoryContainer mockStories={mockStories} />}
      </div>
    );
  }
}
