import React from "react";
import classes from "./Hour.module.css";

export default function Hour(props) {
  return (
    <>
      <div
        style={{ backgroundColor: `${props.backgroundColor}` }}
        className={classes.content}
      >
        <p className={classes.subject}>{props.subjectText}</p>
        <p>{props.time}</p>

        <div>
          <p>Teacher: {props.teacherName}</p>
          <p>Teacher: {props.roomNumber}</p>
          <p>Teacher: {props.labelName}</p>
        </div>
      </div>
    </>
  );
}
