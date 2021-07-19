import React from 'react';
import Cards from './Cards';
const cardsData2 = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Visa',
    imgUrl: 'https://source.unsplash.com/200x200/?visa',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Currency',
    imgUrl: 'https://source.unsplash.com/200x200/?currency',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Weather',
    imgUrl: 'https://source.unsplash.com/200x200/?weather',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Hotels',
    imgUrl: 'https://source.unsplash.com/200x200/?hotels',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'Bank',
    imgUrl: 'https://source.unsplash.com/200x200/?bank',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Airtravel',
    imgUrl: 'https://source.unsplash.com/200x200/?aircraft',
  },
];
function Dropdown4() {
  return (
    <div>
      <div className="drop-down">
        {cardsData2.map((vas, idx) => (
          <Cards id={idx} key={idx} imgUrl={vas.imgUrl} content={vas.content} />
        ))}
      </div>
    </div>
  );
}

export default Dropdown4;
