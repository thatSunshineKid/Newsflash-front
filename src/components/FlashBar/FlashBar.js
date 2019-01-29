import React, { Component } from 'react';
import BarCard from '../BarCard/BarCard';
import downArrow from '../../assets/images/downArrow.svg';
import upArrow from '../../assets/images/upArrow.svg';
import './FlashBar.css';

export default class FlashBar extends Component {
  render() {
    const { mockUsers, showTopTopics, toggleTopTopics } = this.props;

    const barCards = mockUsers.map(user => {
      return <BarCard {...user} key={user.id} showTopTopics={showTopTopics} />;
    });

    return (
      <div className="flashbar-container">
        <div className="flashbar-icon-container">{barCards}</div>
        <div className="top-topics-button" onClick={toggleTopTopics}>
          <p className="top-topics-button-label">
            {!showTopTopics ? 'Show Top Topics' : 'Hide Top Topics'}
          </p>
          <img
            src={!showTopTopics ? downArrow : upArrow}
            alt="show top topics"
          />
        </div>
      </div>
    );
  }
}
