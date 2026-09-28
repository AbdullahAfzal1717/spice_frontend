"use client";
import React, { useState, useEffect } from "react";
import bgImg from "@/images/drink/Drink1.svg";
import "./drinkss.css";

const Drinkss = (props) => {
  const { drinks } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % drinks?.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + drinks?.length) % drinks?.length);
  };

  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const autoRun = setInterval(nextSlide, 5000);
    return () => clearInterval(autoRun);
  }, []);

  return (
    <div className="carousel_Drink">
      <div className="list">
        {drinks?.map((item, index) => (
          <div
            key={index}
            className={`item ${activeIndex === index ? "active" : ""}`}
            style={{
              "--img-src": `url(${item.image})`,
              "--bg-color": "#7d4f35",
              "--title": `'${item.size}'`,
            }}
          >
            <div className="content">
              <div className="Drink_image">
                <img className="image" src={item.image} alt={item.name} />
              </div>

              <div className="info">
                <div className="title">{`${item.name}`}</div>
                <div className="category">{item.size}</div>
                <div className="des">{item.description}</div>
                <div className="des">{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <ul className="dots">
        {drinks?.map((_, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => selectSlide(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Drinkss;
