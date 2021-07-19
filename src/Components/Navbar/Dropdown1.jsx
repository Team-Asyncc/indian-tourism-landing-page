import React from 'react';
import Cards from './Cards';
import './Dropdown1.scss';
const cardsData2 = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Jaipur',
    imgUrl: 'https://source.unsplash.com/200x200/?fort',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Goa',
    imgUrl: 'https://source.unsplash.com/200x200/?beach',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Chandigarh',
    imgUrl: 'https://source.unsplash.com/200x200/?garden',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Delhi',
    imgUrl: 'https://source.unsplash.com/200x200/?temple',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'Shimla',
    imgUrl: 'https://source.unsplash.com/200x200/?shimla,india',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Agra',
    imgUrl: 'https://source.unsplash.com/200x200/?agra,india',
  },
];
function Dropdown1() {
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

export default Dropdown1;
