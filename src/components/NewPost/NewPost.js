import React, { Component } from 'react';
import { addNewPost } from '../../actions';
import { connect } from 'react-redux';
import './NewPost.css';

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: '',
      tags: null,
      sub_tags: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { title, url, tags, sub_tags } = this.state;

    this.props.addPost(title, url, tags, sub_tags);
  };

  render() {
    return (
      <form className="new-post-form" onSubmit={this.handleSubmit}>
        <h2 className="form-new-post-header">Add New Post</h2>
        <input
          type="text"
          placeholder="title"
          id="title"
          onChange={e => this.setState({ title: e.target.value })}
        />
        <input
          type="text"
          placeholder="source url"
          id="url"
          onChange={e => this.setState({ url: e.target.value })}
        />
        <input
          type="text"
          placeholder="tags"
          id="tags"
          onChange={e => this.setState({ tags: [e.target.value] })}
        />
        <input
          type="text"
          placeholder="sub tags"
          id="sub_tags"
          onChange={e => this.setState({ sub_tags: [e.target.value] })}
        />
        <button className="add-post-button">Add Post</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addPost: (title, url, tags, sub_tags) =>
    dispatch(addNewPost(title, url, tags, sub_tags))
});

export default connect(
  null,
  mapDispatchToProps
)(NewPost);
