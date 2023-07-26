import React, { useState } from "react";
import classes from "./Videos.module.css";
import img from "../../../../assets/event-background.jpg";
import HoverButton from "../../tameplates/HoverButton";
import { multimedia } from "./data/multimedia";
import { FaTimes } from "react-icons/fa";
import { AiOutlineZoomIn } from "react-icons/ai";

function Videos() {
  const [selectedImage, setSelectedImage] = useState("");

  const setItem = multimedia.slice(0, 4);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.header}>
            <h2>Featured media</h2>
            <HoverButton firstText="See all" lastText="multimedia" />
          </div>
          <div className={classes.main}>
            <div className={classes.video}>
              <img src={img} alt="" className={classes.videoImg} />
              <h3>Open Days at the Smart</h3>
              <p>
                You and your parents are welcome to visit Smart from 8:30 AM to
                5:30 PM Monday through Saturday, except on public holidays and
                certain days throughout the year, which are noted on the
                calendar.
              </p>
            </div>

            <div className={classes.imageGallery}>
              {setItem.map((imges, index) => (
                <div className={classes.box}>
                  <div className={classes.imgDesc}>
                    <img
                      className={classes.defineImg}
                      key={index}
                      src={imges.img}
                      alt="/"
                    />
                    <p className={classes.desc}>{imges.desc}</p>
                  </div>

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
      </div>
    </>
  );
}

export default Videos;
