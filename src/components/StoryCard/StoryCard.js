import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import user from '../../assets/images/user-silhouette.svg';
import favorite from '../../assets/images/star.svg';
import chat from '../../assets/images/chat.svg';
import authorSource from '../../assets/images/newspaper.svg';
import like from '../../assets/images/like.svg';
import idea from '../../assets/images/idea.svg';
import './StoryCard.css';

export default class StoryCard extends Component {
  render() {
    const { title, author, url, source } = this.props;
    console.log(url);

    return (
      <div className="story-card">
        <h3 className="card-title">{title}</h3>
        <div className="author-story-container">
          <div>
            <img className="card-icon" src={user} alt="author" />
          </div>
          <a className="story-card-link" href={url}>
            Full Story
          </a>
          <div className="favorite-chat-container">
            <img
              className="favorite-card-icon card-icon"
              src={favorite}
              alt="favorite"
            />
            <img className="card-icon" src={chat} alt="chat" />
          </div>
        </div>
        <div className="source-comments-container">
          <div>
            <img className="card-icon" src={authorSource} alt="source" />
          </div>
          <NavLink className="story-card-link" to="/comments">
            Comments
          </NavLink>
          <div className="like-idea-container">
            <img className="like-card-icon card-icon" src={like} alt="like" />
            <img className="card-icon" src={idea} alt="idea" />
          </div>
        </div>
      </div>
    );
  }
}
