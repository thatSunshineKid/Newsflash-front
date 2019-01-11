import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../actions';
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
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
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
        {this.props.errors.length > 0 && (
          <ul>
            {this.props.errors.map(error => (
              <li key={error.field}>{error.message}</li>
            ))}
          </ul>
        )}
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2 className="form-login-header">Login</h2>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
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

export const mapStateToProps = state => {
  let errors = [];
  if (state.authentication.errors) {
    errors = Object.keys(state.authentication.errors).map(field => {
      return { field, message: state.authentication.errors[field] };
    });
  }
  return {
    errors,
    isAuthenticated: state.authentication.isAuthenticated
  };
};

export const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
