import React, { Component } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './StoryContainer.css';

export default class StoryContainer extends Component {
  render() {
    const storyCards = this.props.mockStories.map(item => (
      <StoryCard {...item} key={item.id} />
    ));

    return <div className="card-container">{storyCards}</div>;
  }
}
