import React from "react";
import "./subheader.css";
import Image from "next/image";
import Phone from "@/images/subheader/phone.svg";
import email from "@/images/subheader/mail.svg";
import insta from "@/images/subheader/insta.svg";
import facebook from "@/images/subheader/facebook.svg";
import twitter from "@/images/subheader/twiter.svg";
import git from "@/images/subheader/git.svg";

const SubHeader = (props) => {
  return (
    <div className="subHeader">
      <div className="subHeader-left">
        <div className="subHeader-left_sec1">
          <Image src={Phone} alt="Phone" />
          <div className="subHeader-left_sec1-text">{props?.setting?.phone}</div>
        </div>
        
        <div className="subHeader-left_sec2">
          <Image src={email} alt="Phone" />
          <div className="subHeader-left_sec2-text">{props?.setting?.email}</div>
        </div>
      </div>
      <div className="subHeader-right">
        <div className="subHeader-right-wrapper">
        <Image src={facebook} alt="Phone" />
        <Image src={insta} alt="Phone" />
        <Image src={twitter} alt="Phone" />
        <Image src={git} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
