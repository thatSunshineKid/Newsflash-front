import React, { Component } from 'react';
import tempImage from '../../assets/images/news-temp.jpg';
import './StoryCard.css';

export default class StoryCard extends Component {
  render() {
    const { title, author, url, source } = this.props;

    return (
      <div>
        <h3 className="card-title">{title}</h3>
        <div className="card-content-container">
          <div className="card-link-source-container">
            <a href={url}>Article Link</a>
            <p>
              By: {author} at {source}
            </p>
          </div>
          <img className="card-image" src={tempImage} alt="article" />
        </div>
      </div>
    );
  }
}
