import React, { Component } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './StoryContainer.css';

export default class StoryContainer extends Component {
  render() {
    const storyCards = this.props.posts.map(post => (
      <StoryCard {...post} key={post.id} />
    ));

    return <div className="card-container">{storyCards}</div>;
  }
}
