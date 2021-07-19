import React from 'react';
import Cards from './Cards';
const cardsData2 = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Kedarnath',
    imgUrl: 'https://source.unsplash.com/200x200/?kedarnath',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Konark Temple',
    imgUrl: 'https://source.unsplash.com/200x200/?sun,temple',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Statue of Unity',
    imgUrl: 'https://source.unsplash.com/200x200/?statue,unity',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Ladakh',
    imgUrl: 'https://source.unsplash.com/200x200/?ladakh',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'Golden Temple',
    imgUrl: 'https://source.unsplash.com/200x200/?golden,temple',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Kanchenjunga',
    imgUrl: 'https://source.unsplash.com/200x200/?mountains',
  },
];
function Dropdown3() {
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

export default Dropdown3;
