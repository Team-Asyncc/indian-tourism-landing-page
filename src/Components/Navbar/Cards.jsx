import React from 'react';
import './Cards.scss';
function Cards({ id, title, content, imgUrl }) {
  return (
    <div className="cards-container">
      <div className="card">
        <img src={imgUrl} alt="navbardes" />
        <div className="card-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
