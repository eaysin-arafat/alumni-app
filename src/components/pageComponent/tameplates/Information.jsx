import React from "react";
import classes from "./Information.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Information(props) {
  return (
    <>
      <div style={props.contentStyle}>
        <div style={props.lactureStyle} className={classes.lacture}>
          <div
            style={{ height: `${props.height}`, width: `${props.width}` }}
            className={classes.dateWrapper}
          >
            <div className={classes.manthText}>{props.manth}</div>
            <div className={classes.dateText}>{props.date}</div>
          </div>

          <div
            className={classes.lectureDetails}
            style={{ borderBottom: `${props.borderBottom}` }}
          >
            <div className={classes.time}>
              <AiOutlineClockCircle />
              <p>{props.time}</p>
            </div>
            <div className={classes.place}>
              <GoLocation />
              <p>{props.place}</p>
            </div>
            <div
              style={{ color: `${props.color}` }}
              className={classes.lacturarText}
            >
              {props.lectureText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
