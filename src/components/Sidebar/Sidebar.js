import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = props => {
  let barClassName = 'sidebar';

  if (props.display) {
    barClassName = 'sidebar open';
  }

  return (
    <nav className={barClassName}>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/reading-list">Reading List</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
