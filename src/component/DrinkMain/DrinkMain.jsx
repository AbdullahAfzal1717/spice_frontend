"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";
import Drinkss from "@/component/TestDrinks/Drinkss";

const DrinksMain = (props) => {
  const [drinks, setDrinks] = useState([]);

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
    <div className="DrinksMain" ref={props.innerRef}>
      {drinks?.length > 0 && <Drinkss drinks={drinks} {...props} />}
    </div>
  );
};

export default DrinksMain;
