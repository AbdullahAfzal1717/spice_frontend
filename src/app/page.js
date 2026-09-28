// "use client";
// import React, { useEffect, useState, useRef,Suspense } from "react";

// const SubHeader = React.lazy(() => import("@/component/SubHeader/SubHeader"));
// const Navbar = React.lazy(() => import("@/component/Navbar/Navbar"));
// const Header = React.lazy(() => import("@/component/Header/Header"));
// const Nutration = React.lazy(() => import("@/component/Nutration/Nutration"));
// const Menu = React.lazy(() => import("@/component/Dishes/Dishes"));
// const Delivery = React.lazy(() => import("@/component/Delivery/Delivery"));
// const IceCream = React.lazy(() => import("@/component/Icecream/Icecream"));
// const Offer = React.lazy(() => import("@/component/Offer/Offer"));
// const Drinks = React.lazy(() => import("@/component/Drinks/Drinks"));
// const Msg = React.lazy(() => import("@/component/msg/Msg"));
// const Googlemap = React.lazy(() => import("@/component/googlemap/Googlemap"));
// const Footer = React.lazy(() => import("@/component/Footer/Footer"));
// const Drinkss = React.lazy(() => import("@/component/TestDrinks/Drinkss"));
// const DrinksMain = React.lazy(() => import("@/component/DrinkMain/DrinkMain"));
// import Loader from '@/component/Loader/Loader'

// // import Lenis from "lenis";
// // import "lenis/dist/lenis.css";

// // import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/all';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axiosInstance from '../utils/axios';
// import Template from "@/component/Template/template";


// export default function Home() {
//   const [setting, setSetting] = useState(null)

//   const menuRef = useRef(null);
//   const offerRef = useRef(null);
//   const drinksRef = useRef(null);
//   const drinksMainRef = useRef(null);
//   const contactRef = useRef(null);
//   const aboutRef = useRef(null);
//   const homeRef = useRef(null);
//   const conceptRef = useRef(null);


//   gsap.registerPlugin(ScrollTrigger)


//   // useEffect(() => {
//   //   const lenis = new Lenis({
//   //     duration: 0.5,      
//   //     easing: (t) => t,     
//   //     smooth: true,         
//   //     direction: "vertical", 
//   //     gesture: "touch",
//   //   });

//   //   lenis.on("scroll",(e)=>{
//   //     // console.log(e);
//   //   })

//   //   function raf(time) {
//   //     lenis.raf(time);
//   //     requestAnimationFrame(raf);
//   //   }
//   //   requestAnimationFrame(raf);

//   //   return () => {
//   //     lenis.destroy();
//   //   };
//   // }, []);

//   useEffect(() => {
//     AOS.init({
//       // duration: 1000,
//       // easing: 'ease-in-out', 
//       // once: true,

//       // Global settings:
//       disable: false,
//       startEvent: 'DOMContentLoaded',
//       initClassName: 'aos-init',
//       animatedClassName: 'aos-animate',
//       useClassNames: false,
//       disableMutationObserver: false,
//       debounceDelay: 50,
//       throttleDelay: 99,


//       offset: 120,
//       delay: 0,
//       duration: 400,
//       easing: 'ease',
//       once: false,
//       mirror: true,
//       anchorPlacement: 'top-bottom',

//     });
//   }, []);


//   const fetchSettings = async () => {
//     try {
//       const response = await axiosInstance.get("/settings");
//       if (response?.data !== null && response?.data !== undefined) {
//         setSetting(response?.data)
//       }

//     } catch (error) {

//       message.error(error?.message || "setting not fetch");
//     }
//   };

//   useEffect(() => {
//     fetchSettings();
//   }, []);
//   const onScrollToSection = (section) => {
//     const sectionMap = {
//       menu: menuRef,
//       offers: offerRef,
//       drinks: drinksRef,
//       drinkmain:drinksMainRef,
//       contact: contactRef,
//       about: aboutRef,
//       home: homeRef,
//       concept: conceptRef,
//     };

//     const sectionRef = sectionMap[section];
//     if (sectionRef?.current) {
//       sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <Suspense fallback={<Loader/>}>
//     <div className="app container">
//       <SubHeader setting={setting} />
//       <Navbar setting={setting}
//         onScrollToSection={onScrollToSection}
//       />
//       <Header setting={setting} innerRef={homeRef} onScrollToSection={onScrollToSection} />
//       <Nutration setting={setting} innerRef={aboutRef} />
//       <Menu setting={setting} innerRef={menuRef} />
//       <Delivery setting={setting} innerRef={conceptRef} />
//       {/* <IceCream setting={setting} /> */}
//       <DrinksMain setting={setting} innerRef={drinksMainRef} />
//       <Offer setting={setting} innerRef={offerRef} />
//       <Drinks setting={setting} innerRef={drinksRef} />
//       <Msg setting={setting} innerRef={contactRef} />
//       <Googlemap setting={setting} />
//       <Footer setting={setting} />
//       {/* <Drinkss  /> */}
//       {/* <Template /> */}
//     </div>
//     </Suspense>
//   );
// }



"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";

const SubHeader = React.lazy(() => import("@/component/SubHeader/SubHeader"));
const Navbar = React.lazy(() => import("@/component/Navbar/Navbar"));
const Header = React.lazy(() => import("@/component/Header/Header"));
const Nutration = React.lazy(() => import("@/component/Nutration/Nutration"));
const Menu = React.lazy(() => import("@/component/Dishes/Dishes"));
const Delivery = React.lazy(() => import("@/component/Delivery/Delivery"));
const IceCream = React.lazy(() => import("@/component/Icecream/Icecream"));
const Offer = React.lazy(() => import("@/component/Offer/Offer"));
const Drinks = React.lazy(() => import("@/component/Drinks/Drinks"));
const Msg = React.lazy(() => import("@/component/msg/Msg"));
const Googlemap = React.lazy(() => import("@/component/googlemap/Googlemap"));
const Footer = React.lazy(() => import("@/component/Footer/Footer"));
const Drinkss = React.lazy(() => import("@/component/TestDrinks/Drinkss"));
const DrinksMain = React.lazy(() => import("@/component/DrinkMain/DrinkMain"));
import Loader from "@/component/Loader/Loader";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "../utils/axios";
import "../component/Template/template.css"; // Import the CSS file


export default function Home() {
  const [setting, setSetting] = useState(null);

  const menuRef = useRef(null);
  const offerRef = useRef(null);
  const drinksRef = useRef(null);
  const drinksMainRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const conceptRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axiosInstance.get("/settings");
      if (response?.data !== null && response?.data !== undefined) {
        setSetting(response?.data);
      }
    } catch (error) {
      console.error(error?.message || "Setting not fetched");
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const onScrollToSection = (section) => {
    const sectionMap = {
      menu: menuRef,
      offers: offerRef,
      drinks: drinksRef,
      drinkmain: drinksMainRef,
      contact: contactRef,
      about: aboutRef,
      home: homeRef,
      concept: conceptRef,
    };

    const sectionRef = sectionMap[section];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
        <SubHeader setting={setting} />
        <Navbar
          setting={setting}
          onScrollToSection={onScrollToSection}
        />
        <Header
          setting={setting}
          innerRef={homeRef}
          onScrollToSection={onScrollToSection}
        />
        <Nutration setting={setting} innerRef={aboutRef} onScrollToSection={onScrollToSection} />
        <Menu setting={setting} innerRef={menuRef} />
        <Delivery setting={setting} innerRef={conceptRef} onScrollToSection={onScrollToSection} />
        <DrinksMain setting={setting} innerRef={drinksMainRef} />
        <Offer setting={setting} innerRef={offerRef} />
        <Drinks setting={setting} innerRef={drinksRef} />
        <Msg setting={setting} innerRef={contactRef} />
        <Googlemap setting={setting} />
        <Footer setting={setting} />
    </>
  );
}
