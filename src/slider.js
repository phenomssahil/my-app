import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import './slider.css';


function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log('selected index: ', selectedIndex)
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index}
              onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed"  />}
    >
      {/* <div className='products'>{products.map((product)=>(
        <Shop/>
      ))}</div> */}
      {slides.map((slide) => (
        <Carousel.Item key={slide.image} interval={slide.interval}>
          <img
            className="pic"
            src={slide.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;