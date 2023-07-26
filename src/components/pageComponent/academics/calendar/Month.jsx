import React from "react";
import classes from "./Month.module.css";
import { FaCalendarAlt } from "react-icons/fa";

function Month(props) {
  return (
    <>
      <div className={classes.content}>
        <h2>{props.month}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "15px",
          }}
        >
          {props.dayDesc.map((day, index) => (
            <div key={index} className={classes.dateDesc}>
              <FaCalendarAlt />
              <p className={classes.dayText}>{day}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Month;
