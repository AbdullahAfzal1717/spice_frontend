import React from "react";
import "./offerCard.css";
import Star4 from "@/images/offer/Star4.svg";
import pices from "@/images/offer/pices.svg";
import fir_pattern from "@/images/offer/Pattern1.svg";
import sec_pattern from "@/images/offer/Pattern2.svg";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const OfferCard = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView="auto"
      navigation
      autoplay={{
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false, // Keeps autoplay even after user interaction
      }}
      loop={true}
      watchOverflow={true}
      pagination={false}
      scrollbar={false}
      breakpoints={{
        280: { slidesPerView: props.offers.length === 1 ? 1 : 1 },
        890: { slidesPerView: props.offers.length === 1 ? 1 : 2 },
      }}
      className="Offer_cards_container"
    >
      {props.offers?.map((ele, ind) => (
        <SwiperSlide key={ind} className="Card_container_item_card">
          <div
            className="Card_container"
            key={ind}
            data-aos={ind === 0 ? "fade-right" : "fade-left"}
          >
            <div
              className={`Card_wrapper ${
                ind % 2 === 0 ? "firstCard" : "secondCard"
              }`}
            >
              <div className="Card_right_section">
                <div className="Card_price_container">
                  <Image
                    src={ind % 2 === 0 ? Star4 : pices}
                    alt=""
                    className="Star_image"
                  />
                  <div
                    className={
                      ind % 2 === 0 ? "Price_container1" : "Price_container2"
                    }
                  >
                    <p className="Only">ONLY</p>
                    <h4 className="Amount">
                      €
                      <span className={ind % 2 === 1 ? "second_price" : ""}>
                        {ele.price}
                      </span>
                    </h4>
                  </div>
                </div>
                <div>
                  <h4 className="Offer_going">{ele.discount}% Offer Going</h4>
                  <h2 className="Offer_going_title">{ele.name}</h2>
                  <p className="Offer_going_des">
                    {ele.description} Offer Going Offer Going Offer Going Offer
                    Going Offer
                  </p>
                </div>
              </div>
              <div className="Card_left_section">
                <img
                  src={ele.imageUrl}
                  alt=""
                  className={`${
                    ind % 2 === 1 ? "sec_Offer_image" : "fir_Offer_image"
                  }`}
                />
              </div>
              <Image
                src={ind % 2 === 0 ? fir_pattern : sec_pattern}
                alt={ind === 0 ? "Pattern 1" : "Pattern 2"}
                className={`${
                  ind % 2 === 1 ? "sec_Pattern_image" : "fir_Pattern_image"
                }`}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OfferCard;
