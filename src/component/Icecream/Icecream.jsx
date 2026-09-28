"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "./icecream.css";
import left from "@/images/ice/icep.svg";
import right from "@/images/ice/ices.svg";
import next from "@/images/ice/1.svg";
import back from "@/images/ice/2.svg";
import ImageIce from "@/images/ice/ice.svg";
import axiosInstance from "@/utils/axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/grid";

// Import required modules
import { Navigation, Grid, EffectCards } from "swiper/modules";

const AutoSwiper = (props) => {
  // console.log("Auto", props);
  const Images = [ImageIce, ImageIce, ImageIce, ImageIce, ImageIce];
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction == "left") {
      current.scrollLeft -= 290;
    } else {
      current.scrollLeft += 290;
    }
  };
  return (
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {props.icecreams.map((item, index) => (
          <div
            className="app__gallery-images_card"
            key={`gallery_image-${index + 1}`}
            data-aos="flip-left"
          >
            <div className="app__gallery-images_card_sec1">
              <div className="app__gallery-images_card_sec1-title">
                {item.name}
              </div>
              <div className="app__gallery-images_card_sec1-disc">
                {item.description}
              </div>
              <div className="app__gallery-images_card_sec1-price">
                ${item.price}
              </div>
            </div>
            <div className="app__gallery-images_card_sec2">
              <img
                src={item.image}
                alt="pattern"
                className="app__gallery-images_card_img"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrow">
        <Image
          src={next}
          alt="pattern"
          className="gallery__arrow-icon"
          onClick={() => scroll("left")}
        />
        <Image
          src={back}
          alt="pattern"
          className="gallery__arrow-icon"
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
};

const IceCream = (props) => {
  const [icecreams, setIcecreams] = useState([]);
  const fetchicecreams = async () => {
    try {
      const response = await axiosInstance.get("/menuicecream");
      setIcecreams(response?.data); // Assuming the API returns data under `data`
    } catch (error) {
      message.error(error?.message || "ice creame menu not fetch");
    }
  };

  useEffect(() => {
    fetchicecreams();
  }, []);
  return (
    <div className="ice">
      <div className="iceWrapper">
        <div className="iceWrapper-sec1">
          <div className="iceWrapper-sec1-subtitle" data-aos="fade-down">
            Delights
          </div>
          <div className="iceWrapper-sec1-title" data-aos="fade-right">
            {props?.setting?.icecreamtitle}
          </div>
          <div className="iceWrapper-sec1-desc" data-aos="fade-up">
            {props?.setting?.icecreamediscription}
          </div>
        </div>
        <div className="iceWrapper-sec2">
          <div className="iceWrapper-sec2-wrapper">
            <AutoSwiper icecreams={icecreams} />
          </div>
        </div>
      </div>
      <Image
        src={left}
        alt="pattern"
        className="ice_pattren1"
        data-aos="fade-up-right"
      />
      <Image
        src={right}
        alt="pattern"
        className="ice_pattren2"
        data-aos="fade-up-left"
      />
    </div>
  );
};

export default IceCream;
