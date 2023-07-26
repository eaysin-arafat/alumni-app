import React, { useState } from "react";
import classes from "./Photos.module.css";
import HoverButton from "../../tameplates/HoverButton";
import { multimedia } from "./data/multimedia";
import { FaTimes } from "react-icons/fa";
import { AiOutlineZoomIn } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Photos() {
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMiddleButton, setShowMiddleButton] = useState(true);

  const setItem = multimedia.slice(0, 4);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % multimedia.length);
    setShowMiddleButton(false);
    setSelectedImage("");
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + multimedia.length) % multimedia.length
    );
    setShowMiddleButton(false);
    setSelectedImage("");
  };

  const handleArrowButtonHover = () => {
    setShowMiddleButton(false); // Hide middle button on arrow button hover
  };

  const handleArrowButtonHoverLeave = () => {
    setShowMiddleButton(true); // Show middle button when arrow button hover is removed
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.left}>
              <h2> Featured photos</h2>
              <p>
                A lot of you asked how they can share my email, so now you can.
                But still, we will keep it as closed as possible and won`t
                publish an photos before a week after our initial email to you.
              </p>
              <div className={classes.hoverButton}>
                <HoverButton firstText="See all" lastText="photos" />
              </div>

              <div className={classes.imageGallery}>
                {setItem.map((imges, index) => (
                  <span className={classes.box}>
                    <img
                      className={classes.defineImg}
                      key={index}
                      src={imges.img}
                      alt="/"
                    />

                    <div className={classes.boxContent}>
                      <span
                        className={classes.icon}
                        onClick={() => handleImageClick(imges.img)}
                      >
                        <AiOutlineZoomIn />
                      </span>
                    </div>
                  </span>
                ))}
                {selectedImage && (
                  <div className={classes.modal}>
                    <img src={selectedImage} alt="/" />
                    <div onClick={() => setSelectedImage(null)}>
                      <FaTimes />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={classes.right}>
              <div className={classes.slideImages}>
                <div className={classes.imageClass}>
                  <img
                    className={classes.slideImg}
                    src={multimedia[currentIndex].img}
                    alt=""
                  />
                  <div className={classes.sliderboxContent}>
                    <button
                      className={classes.button}
                      onClick={handlePrev}
                      onMouseOver={handleArrowButtonHover}
                      onMouseLeave={handleArrowButtonHoverLeave}
                    >
                      <AiOutlineArrowLeft />
                    </button>
                    <span
                      className={classes.slidericon}
                      onClick={() =>
                        handleImageClick(multimedia[currentIndex].img)
                      }
                    >
                      {showMiddleButton === false ? null : <AiOutlineZoomIn />}
                    </span>
                    <button
                      className={classes.button}
                      onClick={handleNext}
                      onMouseOver={handleArrowButtonHover}
                      onMouseLeave={handleArrowButtonHoverLeave}
                    >
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
                {selectedImage && (
                  <div className={classes.sliderModal}>
                    <img src={multimedia[currentIndex].img} alt="/" />
                    <div onClick={() => setSelectedImage(null)}>
                      <FaTimes />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
