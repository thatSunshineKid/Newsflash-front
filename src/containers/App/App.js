import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testStore } from '../../actions';
import logo from '../../assets/images/logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.testStore();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NewsFlash
          </a>
        </header>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  testStore: () => dispatch(testStore())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
