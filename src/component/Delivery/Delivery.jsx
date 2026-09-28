import "./delivery.css";
import Image from "next/image";
import buttonarrow from "@/images/drink/buttonarrow.svg";
import pice from "@/images/pices.svg";
import img1 from "@/images/delivery/bon.svg";
import img4 from "@/images/delivery/2.svg";
import img3 from "@/images/delivery/1.svg";
import img2 from "@/images/delivery/3.svg";
import img5 from "@/images/delivery/4.svg";
import hot from "@/images/sec4/hot.svg";
import quick from "@/images/sec4/quick.svg";
import easy from "@/images/sec4/easy.svg";
import CustomButton from "../CustomButton/CustomButton";
import { useRef } from "react";

const Delivery = (props) => {
  console.log(props);
  const data = [
    {
      title: props?.setting?.deliverysubtitle1,
      disc:
        props?.setting?.deliverydiscription1 ||
        "We prioritize speed to ensure your food reaches you as fast as possible, so you can enjoy your meal without long waits.",
      logo: hot,
    },
    {
      title: props?.setting?.deliverysubtitle2,
      disc:
        props?.setting?.deliverydiscription2 ||
        "Our meals are delivered in insulated containers to keep them hot and fresh, just as if you were dining in our place",
      logo: quick,
    },
    {
      title: props?.setting?.deliverysubtitle3,
      disc:
        props?.setting?.deliverydiscription3 ||
        "Our meals are delivered in insulated containers to keep them hot and fresh, just as if you were dining in our place",
      logo: easy,
    },
  ];
  return (
    <div className="Delivery" ref={props.innerRef}>
      <div className="Delivery_wrapper">
        <div className="Delivery_wrapper-side2">
          <div className="Delivery_right">
            <div className="Delivery_right-wrapper">
              <div className="Delivery_wrapper1">
                <div className="Delivery_wrapper1-main">
                  <div
                    className="Delivery_right-wrapper-sec1"
                    data-aos="fade-left"
                  >
                    <Image
                      src={img5}
                      alt="pizza"
                      className="Delivery_right-wrapper-sec1-img"
                    />
                  </div>
                  <div
                    className="Delivery_right-wrapper-sec2"
                    data-aos="fade-right"
                  >
                    <Image
                      src={img4}
                      alt="pizza"
                      className="Delivery_right-wrapper-sec2-img"
                    />
                  </div>
                  <div
                    className="Delivery_right-wrapper-sec3"
                    data-aos="fade-left"
                  >
                    <Image
                      src={img2}
                      alt="pizza"
                      className="Delivery_right-wrapper-sec3-img"
                    />
                  </div>
                  <div
                    className="Delivery_right-wrapper-sec4"
                    data-aos="fade-up"
                  >
                    <Image
                      src={img3}
                      alt="pizza"
                      className="Delivery_right-wrapper-sec4-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Delivery_wrapper-side1">
          <div className="Delivery_left">
            <div className="Delivery_left_shorttitle" data-aos="fade-down">
              food Delivery
            </div>
            <div className="Delivery_left_title" data-aos="fade-up">
              {props?.setting?.deliverytitle}
            </div>
            <div className="Delivery_left_dis" data-aos="fade-left">
              {props?.setting?.deliverydiscription}
            </div>
            {data?.map((item, ind) => {
              return (
                <div
                  className="Deliver_short_card"
                  data-aos="fade-right"
                  key={ind}
                >
                  <div className="Deliver_short_card-logodiv">
                    <Image
                      src={item?.logo}
                      alt="pizza"
                      className="Deliver_short_card-logodiv-img"
                    />
                  </div>
                  <div className="Delivery_left_dcard">
                    <div className="Delivery_left_dcard-title">
                      {item?.title}
                    </div>
                    <div className="Delivery_left_dcard-disc">{item?.disc}</div>
                  </div>
                </div>
              );
            })}
            <div data-aos="fade-right">
              <CustomButton
                name={props?.setting?.drinksnavigationbtn}
                BtnBgColor="transparent"
                ArrowBgColor="#7d4f35"
                TextColor="#7d4f35"
                border="1px solid #7d4f35"
                marginTop="60px"
                padding="0px 05px 0px 3px"
                width="170px"
                img={buttonarrow}
                forNavigation={props.onScrollToSection}
                navigationProp="drinks"
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={img1}
        alt="pizza"
        className="Delivery_wrapper_img1"
        data-aos="fade-down"
      />
      <Image
        src={pice}
        alt="pizza"
        className="Delivery_wrapper_img2"
        data-aos="fade-up-left"
      />
    </div>
  );
};

export default Delivery;
