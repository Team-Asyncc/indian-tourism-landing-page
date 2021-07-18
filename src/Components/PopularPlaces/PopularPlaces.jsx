import React from 'react';
import placecss from './PopularPlaces.module.scss';
import Card from './Card';

const data = [
  { id: 1, img: 'https://unsplash.it/200/200', title: 'Bali' },
  { id: 2, img: 'https://unsplash.it/200/201', title: 'Baliya' },
  { id: 3, img: 'https://unsplash.it/200/202', title: 'Bahraich' },
  { id: 4, img: 'https://unsplash.it/200/203', title: 'Badrukh' },
  { id: 5, img: 'https://unsplash.it/200/204', title: 'Badrukh' },
  { id: 6, img: 'https://unsplash.it/200/205', title: 'Badrukh' },
  { id: 7, img: 'https://unsplash.it/200/206', title: 'Badrukh' },
  { id: 8, img: 'https://unsplash.it/200/207', title: 'Badrukh' },
  { id: 9, img: 'https://unsplash.it/200/208', title: 'Badrukh' },
  { id: 10, img: 'https://unsplash.it/200/209', title: 'Badrukh' },
  { id: 11, img: 'https://unsplash.it/200/210', title: 'Badrukh' },
  { id: 12, img: 'https://unsplash.it/200/211', title: 'Badrukh' },
];

const PopularPlaces = () => {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: 'center', marginTop: '2%' }}>Popular Places</h1>
      <div className={placecss.cardcontainer}>
        {data.map((card, index) => (
          <Card title={card.title} key={index} imageurl={card.img} />
        ))}
      </div>
    </div>
  );
};

export default PopularPlaces;
