import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTestPosts } from '../../thunks/fetchTestPosts';
import { Route, Switch, withRouter } from 'react-router-dom';
import Business from '../../components/Business/Business';
import Food from '../../components/Food/Food';
import Health from '../../components/Health/Health';
import Home from '../../components/Home/Home';
import Login from '../Login/Login';
import NotFound from '../../components/NotFound/NotFound';
import Politics from '../../components/Politics/Politics';
import Profile from '../../components/Profile/Profile';
import ReadingList from '../../components/ReadingList/ReadingList';
import SignUp from '../../components/SignUp/SignUp';
import Sports from '../../components/Sports/Sports';
import Tech from '../../components/Tech/Tech';
import Travel from '../../components/Travel/Travel';
import Trending from '../../components/Trending/Trending';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.addTestPosts();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/business" component={Business} />
          <Route path="/food" component={Food} />
          <Route path="/health" component={Health} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/politics" component={Politics} />
          <Route path="/profile" component={Profile} />
          <Route path="/reading-list" component={ReadingList} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sports" component={Sports} />
          <Route path="/tech" component={Tech} />
          <Route path="/travel" component={Travel} />
          <Route path="/trending" component={Trending} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addTestPosts: story => dispatch(fetchTestPosts(story))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
