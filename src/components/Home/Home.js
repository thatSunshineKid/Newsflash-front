import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTestPosts } from '../../thunks/fetchTestPosts';
import logo from '../../assets/images/newsflash-logo-light.png';
import Search from '../Search/Search';
import StoryContainer from '../StoryContainer/StoryContainer';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import Backdrop from '../Backdrop/Backdrop';
import ToggleDrawerButton from '../ToggleDrawerButton/ToggleDrawerButton';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      drawerOpen: false
    };
  }

  async componentDidMount() {
    const { addTestPosts } = this.props;

    await addTestPosts();
  }

  toggleDrawer = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    const { drawerOpen } = this.state;
    const { posts, authentication } = this.props;
    const { toggleDrawer } = this;

    return (
      <div className="home-container">
        <Sidebar display={drawerOpen} />
        {drawerOpen && <Backdrop toggleDrawer={toggleDrawer} />}
        <header className="home-header">
          <img className="home-logo" src={logo} alt="logo" />
          {authentication.isAuthenticated && (
            <h2 className="home-greeting">Good Afternoon, Kurt.</h2>
          )}
          <div className="homepage-signup-login-container">
            {!authentication.isAuthenticated && (
              <NavLink className="sign-up-link" to="/sign-up">
                Sign Up
              </NavLink>
            )}
            {!authentication.isAuthenticated && (
              <NavLink className="login-link" to="/login">
                Login
              </NavLink>
            )}
            <ToggleDrawerButton toggleDrawer={toggleDrawer} />
          </div>
        </header>
        <NavBar />
        <Search />
        {posts && <StoryContainer mockStories={posts} />}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  authentication: state.authentication,
  posts: state.posts
});

export const mapDispatchToProps = dispatch => ({
  addTestPosts: story => dispatch(fetchTestPosts(story))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
