import React, { useRef } from "react";
import "./nutration.css";
import Image from "next/image";
import pice from "@/images/pices.svg";
import pizza from "@/images/pizza.svg";
import info from "@/images/sce1/1.svg";
import info1 from "@/images/sce1/2.svg";
import info2 from "@/images/sce1/3.svg";
import logo from "@/images/footer/footericon.svg";
import logos from "@/images/sce1/logos.svg";
import video from "@/images/sce1/video.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import arrowVector from "@/images/header/Vector.svg";
import { ScrollTrigger } from "gsap/all";
import CustomButton from "../CustomButton/CustomButton";

const Nutration = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const NutrationMain = useRef();
  const quoteRef = useRef(null);
  const quoteRef2 = useRef(null);
  const splitTextTimeline = useRef(null);
  const splitTextTimelinebelow = useRef(null);
  const Nutration_wrapper_img1 = useRef();
  const Nutration_wrapper_img2 = useRef();

  const data = [
    {
      title: props?.setting?.aboutsubtitle1,
      disc: props?.setting?.aboutdiscription1,
    },
    {
      title: props?.setting?.aboutsubtitle2,
      disc: props?.setting?.aboutdiscription2,
    },
    {
      title: props?.setting?.aboutsubtitle3,
      disc: props?.setting?.aboutdiscription3,
    },
  ];

  useGSAP(
    () => {
      gsap.to(".Nutration_wrapper_img1", {
        rotation: 360,
        x: 100,
        y: 100,
        scrollTrigger: {
          trigger: ".Nutration_wrapper_img1",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".Nutration_wrapper_img2", {
        rotation: 360,
        x: 100,
        y: 100,
        scrollTrigger: {
          trigger: ".Nutration_wrapper_img2",
          start: "bottom bottom",
          end: "top top",
          scrub: true,
        },
      });

      gsap.to(".right-wrapper-sec1", {
        y: "0%",
        scrollTrigger: {
          trigger: ".right-wrapper-sec1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      gsap.to(".right-wrapper-sec2", {
        y: "0%",
        scrollTrigger: {
          trigger: ".wrapper1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      gsap.to(".right-wrapper-sec4", {
        x: "0%",
        scrollTrigger: {
          trigger: ".wrapper2",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      gsap.to(".wrapper3-btn_p", {
        rotation: 360,
        scrollTrigger: {
          trigger: ".wrapper3",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      const quoteElement = quoteRef.current;
      const words = quoteElement.innerText
        .split(" ")
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      quoteElement.innerHTML = words;
      splitTextTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: quoteElement,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      splitTextTimeline.current.from(quoteElement.querySelectorAll("span"), {
        duration: 1,
        opacity: 0,
        x: -20,
        stagger: 0.1,
        ease: "expo.out",
      });
      const quoteElementB = quoteRef2.current;
      const wordsB = quoteElementB.innerText
        .split(" ")
        .map(
          (word) =>
            `<span style="display: inline-block; transform: translateY(100%);">${word}</span>`
        )
        .join(" ");
      quoteElementB.innerHTML = wordsB;
      splitTextTimelinebelow.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".Nutration_wrapper-side1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      splitTextTimelinebelow.current.fromTo(
        quoteElementB.querySelectorAll("span"),
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
      );
    },
    { scope: NutrationMain }
  );
  return (
    <div
      className="Nutration"
      ref={(el) => {
        NutrationMain.current = el;
        if (props.innerRef) props.innerRef.current = el;
      }}
    >
      <div className="Nutration_wrapper">
        <div className="Nutration_wrapper-side1">
          <div className="Nutration_left">
            <div
              className="Nutration_left_title"
              ref={quoteRef}
              data-aos="fade-right"
            >
              {props?.setting?.abouttitle}
            </div>
            <div
              className="Nutration_left_dis"
              ref={quoteRef2}
              data-aos="fade-right"
            >
              {props?.setting?.aboutdiscription}
            </div>
            {data?.map((item, ind) => {
              return (
                <div
                  className="Nutration_left_dcard"
                  key={ind}
                  data-aos="fade-right"
                >
                  <div className="Nutration_left_dcard-title">
                    {item?.title}
                  </div>
                  <div className="Nutration_left_dcard-disc">{item?.disc}</div>
                </div>
              );
            })}
            <CustomButton
              name={props?.setting?.maindrinksnavigationbtn}
              BtnBgColor="#7d4f35"
              ArrowBgColor="#fff"
              TextColor="white"
              marginTop="50px"
              img={arrowVector}
              forNavigation={props.onScrollToSection}
              navigationProp="drinkmain"
            />
          </div>
        </div>
        <div className="Nutration_wrapper-side2">
          <div className="Nutration_right">
            <div className="Nutration_right-wrapper">
              <div className="wrapper1">
                <div className="right-wrapper-sec1">
                  <Image
                    src={info}
                    alt="pizza"
                    className="right-wrapper-sec1-img"
                  />
                </div>
                <div className="right-wrapper-sec2">
                  <Image
                    src={info2}
                    alt="pizza"
                    className="right-wrapper-sec2-img"
                  />
                </div>
              </div>
              <div className="wrapper2">
                <div className="right-wrapper-sec3"></div>
                <div className="right-wrapper-sec4">
                  <Image
                    src={info1}
                    alt="pizza"
                    className="right-wrapper-sec4-img"
                  />
                </div>
              </div>
              <div className="wrapper3">
                <div className="wrapper3-btn_p">
                  <div className="wrapper3-btn">
                    <Image
                      src={logo}
                      alt="pizza"
                      className="wrapper3-btn-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={pice}
        alt="pizza"
        className="Nutration_wrapper_img1"
        ref={Nutration_wrapper_img1}
      />
      <Image
        src={pizza}
        alt="pizza"
        className="Nutration_wrapper_img2"
        ref={Nutration_wrapper_img2}
      />
    </div>
  );
};

export default Nutration;
