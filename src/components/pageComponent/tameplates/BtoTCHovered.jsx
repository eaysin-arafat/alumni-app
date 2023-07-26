import React from "react";
import classes from "./BtoTCHovered.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";

function BtoTCHovered(props) {
  return (
    <>
      <div className={classes.wripper}>
        <div className={classes.contentList}>
          <img className={classes.image} src={props.img} alt="" />
          <div className={classes.teacherDesc}>
            <h5>{props.designation}</h5>
            <h3>{props.name}</h3>
          </div>
          <div className={classes.contentOverLay}>
            <div className={classes.iconGroup}>
              <BsFacebook />
              <AiOutlineInstagram />
              <AiFillTwitterCircle />
              <BiMessageDots />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BtoTCHovered;
