import React from 'react';
import './homepage.scss';
const HomePage = () => {
  return (
    <div className="home-page">
      <video src="./assets/videos/nature-video.mp4" muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Never Stop To </h2>
        <h3>Exploring The World</h3>
        <a href="https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/popular-destinations.html">Explore</a>
      </div>
    </div>
  );
};

export default HomePage;
