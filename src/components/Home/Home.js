import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTestPosts } from '../../thunks/fetchTestPosts';
import logo from '../../assets/images/newsflash-logo-light.png';
import newPost from '../../assets/images/add-post.svg';
import mockUsers from '../../utils/mockUsers.json';
import Search from '../Search/Search';
import StoryContainer from '../StoryContainer/StoryContainer';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import Backdrop from '../Backdrop/Backdrop';
import ToggleDrawerButton from '../ToggleDrawerButton/ToggleDrawerButton';
import FlashBar from '../FlashBar/FlashBar';
import NewPost from '../NewPost/NewPost';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      drawerOpen: false,
      showTopTopics: false,
      showNewPostForm: false
    };
  }

  async componentDidMount() {
    const { addTestPosts } = this.props;

    await addTestPosts();
  }

  toggleDrawer = () => {
    if (this.state.showNewPostForm) {
      return this.showNewPostForm();
    }

    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  toggleTopTopics = () => {
    this.setState(prevState => {
      return { showTopTopics: !prevState.showTopTopics };
    });
  };

  showNewPostForm = () => {
    this.setState(prevState => {
      return { showNewPostForm: !prevState.showNewPostForm };
    });
  };

  render() {
    const { drawerOpen, showTopTopics, showNewPostForm } = this.state;
    const { posts, authentication } = this.props;
    const { toggleDrawer } = this;

    return (
      <div className="home-container">
        <Sidebar display={drawerOpen} />
        {(drawerOpen || showNewPostForm) && (
          <Backdrop toggleDrawer={toggleDrawer} />
        )}
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
            <img
              className="new-post-icon"
              src={newPost}
              alt="add new post"
              onClick={this.showNewPostForm}
            />
            <ToggleDrawerButton toggleDrawer={toggleDrawer} />
          </div>
        </header>
        <FlashBar
          showTopTopics={showTopTopics}
          mockUsers={mockUsers}
          toggleTopTopics={this.toggleTopTopics}
        />
        {showTopTopics && <NavBar />}
        <Search />
        {posts && <StoryContainer posts={posts} />}
        {showNewPostForm && <NewPost showNewPostForm={showNewPostForm} />}
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
