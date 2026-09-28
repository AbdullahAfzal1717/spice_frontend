"use client";
import React, { useState } from "react";
import "./msg.css";
import Image from "next/image";

import Imagemsg1 from "@/images/msg/2.svg";
import Imagemsg2 from "@/images/msg/3.svg";
import Imagemsg3 from "@/images/msg/4.svg";
import Imagemsg from "@/images/msg/msg.svg";
import axiosInstance from "@/utils/axios";

const Msg = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation (e.g., min 3, max 30)
    if (formData.name.length < 3 || formData.name.length > 30) {
      newErrors.name = "Name must be between 3 and 30 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation (only numbers, 10 to 16 digits)
    const phoneRegex = /^\d{10,16}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 to 16 digits.";
    }

    // Find validation (e.g., min 5, max 20)
    if (formData.message.length < 5 || formData.message.length > 20) {
      newErrors.find = "Find field must be between 5 and 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      try {
        const response = await axiosInstance.post("/messages", { ...formData });
        console.log("Form submitted successfully", response.data);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Message sent successfully!");
      } catch (error) {
        console.error(
          "Error submitting form:",
          error.response?.data || error.message,
        );
        alert("Failed to send the message. Please try again.");
      }
    }
  };
  console.log(errors);
  return (
    <div className="Msg" ref={props.innerRef}>
      <div className="Msg_wrapper">
        <div className="Msg_wrapper_sec1">
          <div className="Msg_sec1_images">
            <Image
              src={Imagemsg1}
              alt="pattern"
              className="Msg_sec1_images_img1"
              data-aos="fade-down-right"
            />
            <Image
              src={Imagemsg2}
              alt="pattern"
              className="Msg_sec1_images_img2"
              data-aos="fade-up-right"
            />
            <Image
              src={Imagemsg3}
              alt="pattern"
              className="Msg_sec1_images_img3"
              data-aos="fade-up-left"
            />
          </div>
          <div className="Msg_wrapper_sec1_form">
            <form className="Msg_form" onSubmit={handleSubmit}>
              <div className="Msg_heading_wrapper">
                <div className="Msg_heading_wrapper_title" data-aos="fade-down">
                  {props?.setting?.footertitle}
                </div>
                <div className="Msg_heading_wrapper_disc" data-aos="fade-up">
                  {props?.setting?.footerdiscription}
                </div>
              </div>
              <div className="Msg_form_wrapper">
                {/* Name Field */}
                <input
                  name="name"
                  type="text"
                  placeholder="Nom"
                  className="Msg_form_wrapper_input"
                  value={formData.name}
                  onChange={handleChange}
                />
                {!errors.name ? (
                  <div className="errormis">.</div>
                ) : (
                  <div className="error">{errors.name}</div>
                )}

                {/* Email Field */}
                <input
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  className="Msg_form_wrapper_input"
                  value={formData.email}
                  onChange={handleChange}
                />
                {!errors.email ? (
                  <div className="errormis">.</div>
                ) : (
                  <div className="error">{errors.email}</div>
                )}

                {/* Phone Field */}
                <input
                  name="phone"
                  type="text"
                  placeholder="Numéro de téléphone"
                  className="Msg_form_wrapper_input"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {!errors.phone ? (
                  <div className="errormis">.</div>
                ) : (
                  <div className="error">{errors.phone}</div>
                )}

                {/* Find Field */}
                <input
                  name="message"
                  type="text"
                  placeholder="Comment nous avez-vous trouvé ?"
                  className="Msg_form_wrapper_input"
                  value={formData.message}
                  onChange={handleChange}
                />
                {!errors.find ? (
                  <div className="errormis">.</div>
                ) : (
                  <div className="error">{errors.find}</div>
                )}

                <button type="submit" className="Msg_form_wrapper_btn">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="Msg_wrapper_sec2">
          <Image
            src={Imagemsg}
            alt="pattern"
            className="Msg_wrapper_sec2_img"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Msg;
