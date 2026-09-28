import React, { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "@/images/header/Logo.svg";
import arrowVector from "@/images/header/Vector.svg";
import "./navbar.css";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Navbar = (props) => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="Header_main-logo">
        <Image src={logo} alt="Logo" className="img" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#" onClick={() => props.onScrollToSection("home")}>
            {props?.setting?.navbarhomebtn}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#" onClick={() => props.onScrollToSection("about")}>
            {props?.setting?.navbaraboutbtn}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#" onClick={() => props.onScrollToSection("menu")}>
            {props?.setting?.navbarmenubtn}
          </a>
        </li>
        <li className="p__opensans">
          <a href="#" onClick={() => props.onScrollToSection("concept")}>
            {props?.setting?.navbarconceptbtn}
          </a>
        </li>
        <li className="p__opensans">
          <CustomButton
            name={props?.setting?.navbarcontactusbtn}
            BtnBgColor="#7d4f35"
            ArrowBgColor="#fff"
            TextColor="white"
            img={arrowVector}
            forNavigation={props.onScrollToSection}
            navigationProp="contact"
          />
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <HiMiniBars3BottomLeft
          fontSize={27}
          onClick={() => {
            settoggleMenu(true);
          }}
          className="hamburger-menu"
        />

        {toggleMenu && (
          <div
            className="app__navbar-smallscreen_overlay flex__center slide-bottom"
            style={{ backgroundColor: "white" }}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                settoggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#" onClick={() => props.onScrollToSection("home")}>
                  {props?.setting?.navbarhomebtn}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#" onClick={() => props.onScrollToSection("about")}>
                  {props?.setting?.navbaraboutbtn}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#" onClick={() => props.onScrollToSection("menu")}>
                  {props?.setting?.navbarmenubtn}
                </a>
              </li>
              <li className="p__opensans">
                <a href="#" onClick={() => props.onScrollToSection("concept")}>
                  {props?.setting?.navbarconceptbtn}
                </a>
              </li>
              <li className="p__opensans">
                <CustomButton
                  name={props?.setting?.navbarcontactusbtn}
                  BtnBgColor="#7d4f35"
                  ArrowBgColor="#fff"
                  TextColor="white"
                  img={arrowVector}
                  customhref="#contact"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
