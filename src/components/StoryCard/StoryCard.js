import React, { Component } from 'react';
import './StoryCard.css';

export default class StoryCard extends Component {
  render() {
    const { title, description, image } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <div className="card-content-container">
          <p>{description}</p>
          <img className="card-image" src={image} alt="article" />
        </div>
      </div>
    );
  }
}
