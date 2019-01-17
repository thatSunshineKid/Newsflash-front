import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import './Sidebar.css';

const Sidebar = props => {
  let barClassName = 'sidebar';

  if (props.display) {
    barClassName = 'sidebar open';
  }

  const handleClick = () => {
    props.logoutUser();
  };

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
          <NavLink to="/" onClick={handleClick}>
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
