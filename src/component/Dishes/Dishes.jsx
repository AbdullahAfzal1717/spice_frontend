import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./dishes.css";
import lefttop from "@/images/menu/lefttop.png";
import leftbottom from "@/images/menu/leftbottom.png";
import righttop from "@/images/menu/righttop.png";
import rightbottom from "@/images/menu/rightbottom.png";
import buttonarrow from "@/images/drink/buttonarrow.svg";
import axiosInstance from "@/utils/axios";
import CustomButton from "../CustomButton/CustomButton";
import Loader from "../Loader/Loader";
import { IoStarSharp } from "react-icons/io5";

const Menu = (props) => {
  const [menus, setMenus] = useState([]);
  const [metadata, setMeta] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMoreMenus = () => {
    if (metadata?.hasNextPage && !loadingMore) {
      fetchMenus(Number(metadata.currentPage) + 1);
    }
  };

  const fetchMenus = async (page = 1, limit = 8) => {
    setLoadingMore(true);
    try {
      const response = await axiosInstance.get(
        `/menu?page=${page}&limit=${limit}`
      );
      console.log("res", response);
      const newMenus = response.data.data;

      setMenus((prevMenus) => {
        const menuIds = prevMenus.map((item) => item._id);
        const uniqueMenus = newMenus.filter(
          (item) => !menuIds.includes(item._id)
        );
        return [...prevMenus, ...uniqueMenus];
      });

      setMeta({
        currentPage: response.data.currentPage,
        hasNextPage: response.data.hasNextPage,
        hasPreviousPage: response.data.hasPreviousPage,
        totalCount: response.data.totalCount,
        totalPages: response.data.totalPages,
      });
    } catch (error) {
      console.error(error?.message || "Menu not fetched");
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const Rating = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        <IoStarSharp color="#FFA858" />
      </span>
    ));

    return (
      <div className="rating" style={{ display: "flex", flexDirection: "row" }}>
        {stars}
      </div>
    );
  };

  return (
    <div className="menu" ref={props.innerRef}>
      <div className="menuWrapper">
        <Image
          src={lefttop}
          alt="Left Top Dish"
          className="menu_img1"
          data-aos="fade-down-right"
        />
        <Image
          src={leftbottom}
          alt="Left Bottom Dish"
          className="menu_img2"
          data-aos="fade-up-right"
        />
        <Image
          src={righttop}
          alt="Right Top Dish"
          className="menu_img3"
          data-aos="fade-down-left"
        />
        <Image
          src={rightbottom}
          alt="Right Bottom Dish"
          className="menu_img4"
          data-aos="fade-up-left"
        />
      </div>
      <div className="menuWrapper1">
        <div className="menu-title">
          <div className="menu-title-heading" data-aos="fade-down">
            Menu
          </div>
          <div className="menu-title-disc" data-aos="fade-up">
            Discover Our Dishes
          </div>
        </div>

        <div className="cards_container">
          {menus?.map((menu, ind) => (
            <div className="card" key={ind} data-aos="zoom-in">
              <div className="discount_chip">
                <div
                  className={
                    menu.new || menu.discount
                      ? "chip_discount"
                      : "chip_discount_color"
                  }
                >
                  {menu.new
                    ? "New"
                    : menu.discount
                    ? `Discount ${menu.discount}%`
                    : ""}
                </div>
              </div>
              <div className="menu_img">
                <img
                  className="menu_img_img"
                  src={menu.image}
                  alt={menu.name}
                />
              </div>
              <div className="card_info">
                <p className="card_info_title">{menu.name}</p>
                <p className="card_info_disc">{menu.description}</p>
              </div>
              <hr className="hr_brline" />
              <div className="price_star">
                <div className="price">€{menu.price}</div>
                <div className="stars">
                  <Rating rating={menu.rating} />
                </div>
              </div>
            </div>
          ))}
          {loadingMore && <Loader />}
        </div>
        <div className="btn-div">
          <CustomButton
            name={props?.setting?.loadmoredatabtn}
            BtnBgColor="white"
            ArrowBgColor="#fff"
            TextColor="#7d4f35"
            width="170px"
            img={buttonarrow}
            onCustomClick={loadMoreMenus}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
