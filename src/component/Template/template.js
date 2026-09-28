"use client"
import { useEffect } from "react";
import { AnimatePageIn } from "@/utils/animations";
import "./template.css";




const Template = ({ children }) => {
  useEffect(() => {
    return AnimatePageIn();
  }, []);

  return (
    <div className="idmain" id="idmain">
      <div className="banners" id="banner-0">
        <div id="banner-1" className="banner banner-1"></div>
        <div id="banner-2" className="banner banner-2"></div>
        <div id="banner-3" className="banner banner-3"></div>
        <div id="banner-4" className="banner banner-4"></div>
      </div>
      <div className="app container">
        {children}
      </div>
    </div>
  );
};

export default Template;
