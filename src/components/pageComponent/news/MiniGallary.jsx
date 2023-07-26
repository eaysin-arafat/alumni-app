import React, { useState } from "react";
import classes from "./MiniGallary.module.css";
import { ImgData } from "../about/aboutIndex/data/imgData";
import { FaTimes } from "react-icons/fa";
import { AiOutlineZoomIn } from "react-icons/ai";

function MiniGallary() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
      <div className={classes.content}>
        <h1>Gallery</h1>
        <div className={classes.imageContent}>
          <div className={classes.imageGallery}>
            {ImgData.map((imges, index) => (
              <div className={classes.box}>
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
              </div>
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
      </div>
    </>
  );
}

export default MiniGallary;
