import React from "react";
import "./drinkCard.css";
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DrinkCard = (props) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false, // Keeps autoplay even after user interaction
      }}
      navigation={true}
      breakpoints={{
        280: { slidesPerView: props.drinks.length === 1 ? 1 : 1 },
        768: { slidesPerView: props.drinks.length === 1 ? 1 : 2 },
        1040: { slidesPerView: props.drinks.length === 1 ? 1 : 3 },
        1490: { slidesPerView: props.drinks.length === 1 ? 1 : 4 },
        1750: { slidesPerView: props.drinks.length === 1 ? 1 : 5 },
      }}
    >
      <div className="Drink_grid">
        {props.drinks?.map((data, ind) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={ind}
          >
            <div className="Drink_container" data-aos="fade-down zoom-in">
              <div className="Drink_wrapper">
                <img src={data.image} alt="Drink" className="Drink_image" />
                <div className="Drink_price">
                  <h3 className="Drink_title">{data?.name}</h3>
                  <h3 className="Drink_amount">€{data?.price}</h3>
                </div>
                <div className="Drink_line"></div>
                <p className="Drink_description">{data?.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default DrinkCard;
