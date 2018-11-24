import React, { Component } from 'react';
import searchIcon from '../../assets/images/search-magnifier-interface-symbol.svg';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="search-container">
        <input placeholder="Search for a story" />
        <button className="search-button">
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>
    );
  }
}
