import React from "react";
import "./header.css";
import Image from "next/image";
import Hero from "@/images/header/Hero.svg";
import arrowVector from "@/images/header/Vector.svg";
import buttonarrow from "@/images/drink/buttonarrow.svg";
import CustomButton from "../CustomButton/CustomButton";

const Header = (props) => {
  return (
    <div className="Header" ref={props.innerRef}>
      {/* Background Image Section */}
      <div className="Headersec-logo">
        <Image src={Hero} alt="Background" className="Headersec-logo-img" />
      </div>

      {/* Information Section */}
      <div className="Headersec-information">
        <h1 className="Headersec-information-title" data-aos="fade-down">
          {props?.setting?.headertitle}
        </h1>
        <p className="Headersec-information-desc" data-aos="fade-up">
          {props?.setting?.headerdiscription}
        </p>
      </div>
      <div className="header-buttons">
        <CustomButton
          name={props?.setting?.menunavigationbtn}
          BtnBgColor="white"
          ArrowBgColor="#fff"
          TextColor="#7d4f35"
          width="170px"
          img={buttonarrow}
          forNavigation={props.onScrollToSection}
          navigationProp="menu"
        />
        <CustomButton
          name={props?.setting?.offernavigationbtn}
          BtnBgColor="transparent"
          ArrowBgColor="#fff"
          TextColor="#FBFBFB"
          border="1px solid #FBFBFB"
          width="170px"
          img={arrowVector}
          forNavigation={props.onScrollToSection}
          navigationProp="offers"
        />
      </div>
    </div>
  );
};

export default Header;
