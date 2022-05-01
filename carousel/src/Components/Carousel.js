import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import './styles.css'

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="styled-slider">
      <div id="left-arrow" >
        <FaChevronLeft
          onClick={prevSlide}
        />
      </div>
      <div id="right-arrow">
        <FaChevronRight
          onClick={nextSlide}
        />
      </div>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img className="slide-image" src={slide.image} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;