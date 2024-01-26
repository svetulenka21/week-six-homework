import React, { useState } from 'react';
import { carouselData } from './carouselData';

const Carousel = () => {
  const [newItem, setNewItem] = useState(0);
  const { idTwo, descriptionTwo, priceTwo, imageTwo } = carouselData[newItem];

  const previousClick = () => {
    setNewItem((bead) => {
      bead--;
      if (bead < 0) {
        return carouselData.length - 1;
      }
      return bead;
    });
  };

  const nextClick = () => {
    setNewItem((bead) => {
      bead++;
      if (bead > carouselData.length - 1) {
        bead = 0;
      }
      return bead;
    });
  };

  return (
    <div className='secondMainContainer'>
      <div>
        <h2>
          <span>{idTwo}</span> - {descriptionTwo}
        </h2>
      </div>
      <div>
        <img src={imageTwo} alt='Beads' width='400px' />
      </div>
      <div>
        <h3>
          From <font color='rgb(107, 237, 74)'><i><bold>{priceTwo}</bold></i></font>
        </h3>
      </div>
      <div>
        <button className='btnCarousel' onClick={previousClick}>
          Previous
        </button>
        <button className='btnCarousel' onClick={nextClick}>
          Next
        </button>
      </div>
      <div>
        <p><font size='1'>Photos were taken from: https://clouddiy.shop</font></p>
      </div>
    </div>
  );
};

export default Carousel;
