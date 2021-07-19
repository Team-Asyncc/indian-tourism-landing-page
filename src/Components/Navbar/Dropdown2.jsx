import React from 'react';
import Cards from './Cards';
const cardsData2 = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Heritage',
    imgUrl: 'https://source.unsplash.com/200x200/?heritage',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Spiritual',
    imgUrl: 'https://source.unsplash.com/200x200/?spiritual',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Adventure',
    imgUrl: 'https://source.unsplash.com/200x200/?adventure',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Nature',
    imgUrl: 'https://source.unsplash.com/200x200/?nature',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'Wildlife',
    imgUrl: 'https://source.unsplash.com/200x200/?wildlife',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Shopping',
    imgUrl: 'https://source.unsplash.com/200x200/?shopping',
  },
];
function Dropdown2() {
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

export default Dropdown2;
