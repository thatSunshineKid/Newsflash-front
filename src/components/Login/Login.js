import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/newsflash-logo-light.png';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="login-container">
        <header className="login-header">
          <NavLink to="/">
            <img className="login-logo" src={logo} alt="logo" />
          </NavLink>
          <NavLink className="sign-up-home-link" to="/">
            Home
          </NavLink>
        </header>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2 className="form-login-header">Login</h2>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button className="login-button">Login</button>
          <div className="login-link-container">
            <NavLink className="login-form-link" to="/sign-up">
              Sign Up
            </NavLink>
            <NavLink className="login-form-link" to="/">
              Forgot Password?
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(Login);
