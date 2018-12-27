import React from 'react';
import menu from '../../assets/images/menu.svg';
import './ToggleDrawerButton.css';

const ToggleDrawerButton = props => (
  <button className="home-menu-button" onClick={props.toggleDrawer}>
    <img src={menu} alt="menu" />
  </button>
);

export default ToggleDrawerButton;
