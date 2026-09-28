"use client";
import React, { useState, useEffect } from "react";
import "./offer.css";
import OfferCard from "../OfferCard/OfferCard";
import Image from "next/image";
import pizza1 from "@/images/offer/pizza1.svg";
import axiosInstance from "@/utils/axios";

const Offer = (props) => {
  const [offers, setOffers] = useState([]);

  // Fetch all offers
  const fetchOffers = async () => {
    try {
      const response = await axiosInstance.get("/offers");
      const offersData = response?.data?.data ?? response?.data ?? [];
      setOffers(Array.isArray(offersData) ? offersData : []);
    } catch (error) {
      console.error(error?.message || "Offers menu not fetched");
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // console.log(offers, "offers");
  return (
    <div className="Offer" ref={props.innerRef}>
      <div className="Offer_wrapper">
        <div className="Offer_shorttitle" data-aos="fade-down">
          OFFER
        </div>
        <div className="Offer_title" data-aos="fade-up">
          {props?.setting?.offertitle}
        </div>
        <div className="Offer_dis" data-aos="fade-up">
          {props?.setting?.offerdiscription}
        </div>
      </div>
      <div className="Offer_cards">
        <OfferCard offers={offers} />
      </div>
      <Image
        src={pizza1}
        alt="pizza"
        className="Offer_pizza_img1"
        data-aos="fade-down-right"
      />
    </div>
  );
};

export default Offer;
