import React from "react";
import "./experiance.scss";
const Experiance = () => {
  const ExpCard = ({ exp }) => {
    console.log(`url${exp.url}`);
    return (
      <div className="exp-card" style={{ backgroundImage: `url(${exp.url})` }}>
        <p className="exp-name">{exp.name}</p>
      </div>
    );
  };
  const demoData = [
    {
      name: "Heritage",
      url: "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/buddhism/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg",
    },
    {
      name: "Nature and Wildlife",
      url: "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/nature/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg",
    },
  ];
  return (
    <div className="experiance">
      <h1>Immersive Experiance</h1>
      <p>In the land of opulence, let loose and discover yourself</p>
      <div className="cards">
        {demoData.map((exp, index) => (
          <ExpCard exp={exp} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experiance;
