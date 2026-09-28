import React, { useState } from "react";
import "./customButton.css";
import buttonarrow from "@/images/drink/buttonarrow.svg";
import Image from "next/image";

const CustomButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(true);

    if (props.onCustomClick) {
      props.onCustomClick();
    }
    if (props.forNavigation) {
      props.forNavigation(props.navigationProp);
    }
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };

  return (
    <a
      href="#"
      className={`btn ${isActive ? "active" : ""}`}
      onClick={handleClick}
      style={{
        backgroundColor: props.BtnBgColor,
        color: props.TextColor,
        marginTop: props.marginTop,
        border: props.border,
      }}
    >
      {props.name}
      <span style={{ backgroundColor: props.TextColor }}>
        <Image src={props.img} alt="Arrow" />
      </span>
    </a>
  );
};

export default CustomButton;
