import React from 'react';
import logo from '../../assets/images/newsflash-solo-logo.png';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="loading logo" />
    </div>
  );
};

export default Loading;
