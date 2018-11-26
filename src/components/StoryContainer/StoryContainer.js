import React, { Component } from 'react';
import { mockStories } from '../../utils/mockStories';
import StoryCard from '../StoryCard/StoryCard';
import './StoryContainer.css';

export default class StoryContainer extends Component {
  render() {
    const storyCards = mockStories.map(item => <StoryCard {...item} />);

    return <div className="card-container">{storyCards}</div>;
  }
}
