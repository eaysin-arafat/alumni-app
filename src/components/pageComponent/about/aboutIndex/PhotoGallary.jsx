import React, { useState } from "react";
import classes from "./PhotoGallary.module.css";
import { ImgData } from "./data/imgData";
import { FaTimes } from "react-icons/fa";
import { AiOutlineZoomIn } from "react-icons/ai";

function PhotoGallary() {
  const [selectedImage, setSelectedImage] = useState("");

  const setItem = ImgData.slice(0, 4);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1>Gallery</h1>
          <div className={classes.imageContent}>
            <div className={classes.imageGallery}>
              {setItem.map((imges, index) => (
                <div className={classes.box}>
                  <img
                    className={classes.defineImg}
                    key={index}
                    src={imges.img}
                    alt="/"
                  />

                  <div className={classes.boxContent}>
                    <h3 className={classes.title}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h3>
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
      </div>
    </>
  );
}

export default PhotoGallary;
