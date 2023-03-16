import React, { useEffect, useState } from "react";
import ManuBar from "./ManuBar";
import classes from "../../styles/Slider.module.css";
import { SliderData } from "./data/slider-data";
import AnimateText from "./AnimateText";

function Slider() {
  const [currentImageSlide, setcurrentImageSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageSlide === 2) {
        setcurrentImageSlide(0);
      } else {
        setcurrentImageSlide(currentImageSlide + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImageSlide]);

  const bgImageStyle = {
    backgroundImage: `url(${SliderData[currentImageSlide].image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <>
      <div className={classes.countinerStyle}>
        <div className={classes.manuBar}>
          <ManuBar />
        </div>
        <div style={bgImageStyle}></div>
        <div className={classes.transparentBackground}></div>
        <div className={classes.description}>
          <AnimateText />
        </div>
      </div>
    </>
  );
}

export default Slider;
