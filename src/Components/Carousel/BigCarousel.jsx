import React from 'react';
import { data } from './data';
import './BigCarousel.scss';
import { useState } from 'react';

import icons from '../../utils/getIcons.js';

const BigCarousel = () => {
  const [curr, setCurr] = useState(0);

  const nextSlide = () => {
    setCurr(curr === data.length - 1 ? 0 : curr + 1);
  };

  const prevSlide = () => {
    setCurr(curr === 0 ? data.length - 1 : curr - 1);
  };

  // setInterval(() => {
  //   nextSlide();
  // }, 2000);

  return (
    <div className="slider">
      <h1>Popular in India</h1>
      <p>
        India is a home to the finest architectural heritage, serene ghats,
        spectacular landscapes and largest tiger reserve
      </p>
      <img
        src={icons.left}
        className="left-arrow"
        height={30}
        width={30}
        alt="left"
        onClick={() => nextSlide()}
      />
      <img
        src={icons.right}
        className="right-arrow"
        height={30}
        width={30}
        alt="left"
        onClick={() => prevSlide()}
      />
      {data.map((val, idx) => {
        return (
          <div key={idx} className={idx === curr ? 'slide active' : 'slide'}>
            {idx === curr && (
              <img className="image" src={val.src} alt="img slider" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BigCarousel;
