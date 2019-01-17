import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions';
import logo from '../../assets/images/newsflash-logo-light.png';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      first: '',
      last: '',
      email: '',
      username: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { first, last, email, username, password } = this.state;

    this.props.register(first, last, email, username, password);
  };

  render() {
    const { isAuthenticated, errors } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signup-container">
        <header className="signup-header">
          <NavLink to="/">
            <img className="search-logo" src={logo} alt="logo" />
          </NavLink>
          <NavLink className="sign-up-home-link" to="/">
            Home
          </NavLink>
        </header>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2 className="form-signup-header">Sign Up</h2>
          {errors.length > 0 && (
            <ul>
              {errors.map(error => (
                <li key={error.field}>{error.message}</li>
              ))}
            </ul>
          )}
          <input
            type="text"
            placeholder="first name"
            id="first"
            onChange={e => this.setState({ first: e.target.value })}
          />
          <input
            type="text"
            placeholder="last name"
            id="last"
            onChange={e => this.setState({ last: e.target.value })}
          />
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
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
          <button className="signup-button">Sign Up</button>
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

const mapDispatchToProps = dispatch => ({
  register: (first, last, email, username, password) =>
    dispatch(register(first, last, email, username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
