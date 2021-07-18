import './MustVisit.scss';
import React from 'react';
import { useState } from 'react';
const datas = [
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/thrissur/thrissur-athirapally-falls-20.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/goa/goa-vagator-beach-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/gokarna/gokarna-maravanthe-beach-0.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/kochi/kochi-chinese-fishing-nets-1.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/bekal/bekal-mallikarjuna-temple-170.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredible-india-v2/images/home/orignial.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/munnar/munnar-pampadum-shola-national-park-20.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/poster/shillong.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
  {
    image:
      'https://www.incredibleindia.org/content/dam/incredibleindia/images/places/wayanad/wayanad-wayanad-wildlife-sanctuary-11.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg',
  },
];
const text = [
  {
    title: 'Thrissur',
    para: 'Often referred to as the cultural capital of Kerala, Thrissur is a centre poi...',
  },
  {
    title: 'Goa',
    para: "The pocket-sized paradise of Goa is a traveller's dream. Sun, sea, sand, spices,...",
  },
  {
    title: 'Gokarna',
    para: 'With stunning beaches, legendary temples and offering several adventure ...',
  },
  {
    title: 'Kochi',
    para: 'A vibrant potpourri of art, culture, food, carnivals and festivals,  ..',
  },
  {
    title: 'Bekal',
    para: 'An emerald gem set amidst honey-hued beaches, pristine waterfalls and ..',
  },
  {
    title: 'Statue of unity',
    para: 'An emerald gem set amidst honey-hued beaches, pristine waterfalls..',
  },
  {
    title: 'Munnar',
    para: 'A lush carpet of rolling green, interrupted by low rises of mountains of..',
  },
  {
    title: 'Shilong',
    para: 'Colonial-era charm, a landscape of rolling green and pristine mountains ...',
  },
  {
    title: 'Wayanad',
    para: 'A coffer of coffee, cardamom and tea plantations, which envelope the land...',
  },
];

export default function MustVisit() {
  const [currIdx, setCurrIdx] = useState(0);
  const [x, setX] = useState(0);
  function Prev() {
    x <= -600 ? setX(0) : setX(x - 124);
    console.log(currIdx, x);
  }
  function Next() {
    x >= 600 ? setX(0) : setX(x + 124);
    console.log(currIdx, x);
  }
  return (
    <>
      <div className="MustVisitInfo">
        <h1 className="header">Must Visit Destinations</h1>
        <p>
          From historical cities to natural splendours, come see the best of
          India
        </p>
      </div>
      <div className="must-visit">
        <img
          className="nextKey"
          onClick={Next}
          src="https://www.incredibleindia.org/etc.clientlibs/incredible-india-v2/components/clientlibs/main/resources/icons/arrow-right.svg"
          alt="Next"
        />
        <img
          className="prevKey"
          onClick={Prev}
          src="https://www.incredibleindia.org/etc.clientlibs/incredible-india-v2/components/clientlibs/main/resources/icons/arrow-left.svg"
          alt="Plev"
        />
        <div className="cardContainer">
          {datas.map((_, idx) => {
            return (
              <div
                className="cards"
                key={idx}
                style={{ transform: `translateX( ${x}%)` }}
              >
                <div
                  id="image"
                  style={{ backgroundImage: `url(${datas[idx].image})` }}
                >
                  {' '}
                </div>
                <div className="card-contents">
                  <h2>{text[idx].title}</h2>
                  <p>{text[idx].para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
