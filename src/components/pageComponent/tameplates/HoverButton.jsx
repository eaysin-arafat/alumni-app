import React from "react";
import classes from "./HoverButton.module.css";
import { Link } from "react-router-dom";

function HoverButton(props) {
  return (
    <>
      <Link
        style={{ color: `${props.color}`, fontSize: `${props.fontSize}` }}
        className={classes.LinkStyle}
        to={props.pathName}
      >
        <span>{props.firstText}</span> {props.lastText}
      </Link>
    </>
  );
}

export default HoverButton;
