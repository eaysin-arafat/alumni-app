import React from "react";
import classes from "./SingleProfile.module.css";
import img from "../../../../assets/presidentImg.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import HoverButton from "../../tameplates/HoverButton";

function SingleProfile() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <img className={classes.image} src={img} alt="" />
            <div className={classes.profileDetails}>
              <p className={classes.jobTitle}>President</p>
              <h3>Christopher Kale</h3>
              <p className={classes.profileDesc}>
                Christopher Kane is the 23rd president of Smart University, and
                the Chris Argyris Professor of Politology. His presidential term
                began in July 2013.
              </p>
              <div className={classes.iconGroup}>
                <BsFacebook />
                <AiOutlineInstagram />
                <AiFillTwitterCircle />
                <BiMessageDots />
              </div>
              <div className={classes.fullDetailsLink}>
                <HoverButton
                  firstText="Read "
                  lastText="full profile"
                  color="#002147"
                  fontSize="17px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProfile;
