import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testStore } from '../../actions';
import { Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.testStore();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
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
