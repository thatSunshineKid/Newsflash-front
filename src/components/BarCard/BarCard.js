import React, { Component } from 'react';
import './BarCard.css';

export default class BarCard extends Component {
  render() {
    const { image, user } = this.props;

    return (
      <div className="bar-card-container">
        <img className="bar-card-image" src={image} alt="user" />
        <p className="bar-card-username">{user}</p>
      </div>
    );
  }
}
