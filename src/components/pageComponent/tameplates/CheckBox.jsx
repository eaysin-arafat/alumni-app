import React from "react";
import classes from "./CheckBox.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";

function CheckBox(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: `${props.backgroundColor}`,
          color: `${props.color}`,
        }}
        className={classes.list}
      >
        <RiCheckboxCircleLine />
        {props.checkBoxText}
      </div>
    </>
  );
}

export default CheckBox;
