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
      {
        slides.length === 1 ? null :
          <>
            <div id="left-arrow" >
              <FaChevronLeft
                onClick={prevSlide}
              />
            </div>
            <div id="right-arrow">
              <FaChevronRight
                onClick={nextSlide}
              />
            </div></>
      }

      {slides.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (
              <>
                <div className="img-desc">
                  <h1>{slide.title}</h1>
                  <h3>{slide.subTitle}</h3>
                </div>
                <img className="slide-image" src={slide.image} alt="" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;