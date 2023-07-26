import React, { useEffect, useState } from "react";
import classes from "./NavbarIndex.module.css";
import ManuBar from "./ManuBar";
import { SliderTextData, SliderData } from "./data/slider-data";
import Slider from "react-animated-slider";
// import "react-animated-slider/build/vertical.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./vertical.css";

function NavbarIndex() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % SliderData.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className={classes.sliderContainer}>
            {SliderData.map((image, index) => (
              <div
                key={index}
                className={
                  index === currentImage
                    ? `${classes.sliderImage} ${classes.active}`
                    : `${classes.sliderImage}`
                }
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
            <div className={classes.content}>
              <ManuBar
                className={classes.transparentBackground}
                color="white"
                alignItems="center"
                margin="15px 0 0 0"
              />
              <Slider autoplay={5000} direction="vertical">
                {SliderTextData.map((text, index) => (
                  <div key={index} className={classes.textWrapper}>
                    <h2>{text.title}</h2>
                    <h5>{text.header}</h5>
                    <p>{text.desc}</p>
                    <button>
                      {text.button}
                      <MdKeyboardArrowRight />
                    </button>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarIndex;
