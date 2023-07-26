import React from "react";
import classes from "./Event.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Event(props) {
  return (
    <>
      <div className={classes.event}>
        <ul>
          <li className={classes.date}>
            <p className={classes.dateText}>{props.date}</p>
            <p className={classes.monthText}>{props.month}</p>
            <div className={classes.topSimble}>
              <div className={classes.simble}></div>
              <div className={classes.simble}></div>
            </div>
          </li>
          <li className={classes.eventsContent}>
            <div className={classes.eventInfo}>
              <div className={classes.dateInfo}>
                <AiOutlineClockCircle />
                <p>{props.time}</p>
              </div>
              <div className={classes.locationInfo}>
                <GoLocation />
                <p>{props.place}</p>
              </div>
            </div>
            <div className={classes.eventDetails}>
              <p>{props.desc}</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Event;
