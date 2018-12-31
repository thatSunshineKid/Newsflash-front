import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testStore } from '../../actions';
import { Route, withRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile';
import Favorites from '../../components/Favorites/Favorites';
import './App.css';

class App extends Component {
  fetchTestData = async () => {
    const url =
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/backend/test/';

    const response = await fetch(url);

    const testData = await response.json();
  };

  componentDidMount() {
    this.props.testStore();

    this.fetchTestData();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/favorites" component={Favorites} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  testStore: () => dispatch(testStore())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
