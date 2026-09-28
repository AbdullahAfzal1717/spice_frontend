"use client";
import React, { useEffect, useState } from "react";
import "./drinks.css";
import DrinkCard from "../DrinkCard/DrinkCard";
import drinktopright from "@/images/drink/drinktopright.svg";
import drinkbottomleft from "@/images/drink/drinkbottomleft.svg";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import axiosInstance from "@/utils/axios";

const Drinks = (props) => {
  const [drinks, setDrinks] = useState([]);

  // Fetch all menu drinks
  const fetchdrinks = async () => {
    try {
      const response = await axiosInstance.get("/menudrinks");
      setDrinks(response?.data);
    } catch (error) {
      console.error(error?.message || "Failed to fetch drinks menu.");
    }
  };

  useEffect(() => {
    fetchdrinks();
  }, []);

  return (
    <div className="Drinks" ref={props.innerRef}>
      <div className="Drinks_wrapper">
        <div className="Drinks_shorttitle" data-aos="fade-down">
          MENU
        </div>
        <div className="Drinks_title" data-aos="fade-up">
          {props?.setting?.drinktitle}
        </div>
        <div className="Drinks_dis" data-aos="fade-up">
          {props?.setting?.drinkdiscreption}
        </div>
      </div>
      <DrinkCard drinks={drinks} />

      <Image
        src={drinktopright}
        alt="Top decoration"
        className="Drinks_wrapper_img1"
        data-aos="fade-left"
      />
      <Image
        src={drinkbottomleft}
        alt="Bottom decoration"
        className="Drinks_wrapper_img2"
        data-aos="fade-right"
      />
    </div>
  );
};

export default Drinks;
