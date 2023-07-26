import React, { useState } from "react";
import classes from "./Certifications.module.css";
import { CertificateImg } from "./data/certificateData";
import { FaTimes } from "react-icons/fa";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1>Certification</h1>
          <div className={classes.imageContent}>
            <div className={classes.imageGallery}>
              {CertificateImg.map((imges, index) => (
                <div className={classes.imgWrapper}>
                  <img
                    className={classes.defineImg}
                    onClick={() => handleImageClick(imges.img)}
                    key={index}
                    src={imges.img}
                    alt="/"
                  />
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

export default Certifications;
