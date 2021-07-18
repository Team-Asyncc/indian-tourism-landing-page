import React from 'react';
import './Cards.scss';
const cardsData = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Clark Kent',
    imgUrl: 'https://unsplash.it/200/200',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Bruce Wayne',
    imgUrl: 'https://unsplash.it/201/200',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Peter Parker',
    imgUrl: 'https://unsplash.it/200/201',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Tony Stark',
    imgUrl: 'https://unsplash.it/201/201',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'Reed Richards',
    imgUrl: 'https://unsplash.it/202/200',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Reed Richards',
    imgUrl: 'https://unsplash.it/202/200',
  },
];
function Cards() {
  const Card = (props) => (
    <div className="card">
      <img src={props.imgUrl} alt={props.alt || 'Image'} />
      <div className="card-content">
        <p>{props.content}</p>
      </div>
    </div>
  );

  const CardContainer = (props) => (
    <div className="cards-container">
      {props.cards.map((card, idx) => (
        <Card
          title={card.title}
          key={idx}
          content={card.content}
          imgUrl={card.imgUrl}
        />
      ))}
    </div>
  );
  return (
    <div>
      <div className="container">
        <CardContainer cards={cardsData} />
      </div>
    </div>
  );
}

export default Cards;
