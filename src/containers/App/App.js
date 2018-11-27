import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testStore } from '../../actions';
import { Route, withRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      practiceData: []
    };
  }
  async componentDidMount() {
    this.props.testStore();
    const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/');
    const practiceData = await response.json();
    this.setState({ practiceData: [...practiceData] });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
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
