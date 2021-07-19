import React from 'react';
import './homepage.scss';
const HomePage = () => {
  return (
    <div className="home-page">
      <video src="./assets/videos/nature-video.mp4" loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Never Stop To </h2>
        <h3>Exploring The World</h3>
        <a href="#">Explore</a>
      </div>
    </div>
  );
};

export default HomePage;
