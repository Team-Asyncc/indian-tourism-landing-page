import React from 'react';
import './experience.scss';
const Experience = () => {
  const ExpCard = ({ exp }) => {
    return (
      <div className="exp-card" style={{ backgroundImage: `url(${exp.url})` }}>
        <div className="upper"></div>
        <div className="hover-name">{exp.name}</div>
        <div className="lower"></div>
        <p className="exp-name">{exp.name}</p>
      </div>
    );
  };
  const demoData = [
    {
      name: 'Art',
      url: './assets/art.jpg',
    },
    {
      name: 'Heritage',
      url: './assets/heritage.jpg',
    },
    {
      name: 'Adventure',
      url: './assets/adventure.jpg',
    },
    {
      name: 'Museum',
      url: './assets/museum.jpg',
    },
    {
      name: 'Spiritual',
      url: './assets/spiritual.jpg',
    },
    {
      name: 'Luxury',
      url: './assets/luxury.jpg',
    },
    {
      name: 'Food and Cuisine',
      url: './assets/foodAndCuisine.jpg',
    },
    {
      name: 'Nature and Wildlife',
      url: './assets/natureandwildlife.jpg',
    },
  ];
  return (
    <div className="experience">
      <h1>Immersive Experience</h1>
      <p>In the land of opulence, let loose and discover yourself</p>
      <div className="experienceCards">
        {demoData.map((exp, index) => (
          <ExpCard exp={exp} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
