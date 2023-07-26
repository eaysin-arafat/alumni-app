import React from "react";
import classes from "./Facilities.module.css";
import img from "../../../../../assets/slider2.jpg";

function Facilities() {
  return (
    <>
      <div className={classes.content}>
        <img className={classes.image} src={img} alt="" />
        <div className={classes.text}>
          <h2> Lorem ipsum</h2>
          <p className={classes.firstText}>
            Smart University`s proud tradition of athletics is reflected in the
            beauty and function of its campus facilities, the Haraldur Athletic
            Complex and Hopkins Gymnasium.
          </p>

          <p className={classes.secondName}>
            Ford Athletic Field, complete with digital scoreboards, allows
            Athletics lacrosse, soccer, and softball teams to host games on
            regulation fields; CIF-SS regulation-sized Hopkins Gymnasium is home
            court for basketball and volleyball. Smart University athletes also
            benefit from use of the Rosenbaum Family Weight Training Room, a
            facility designed specifically for our students.
          </p>
        </div>
      </div>
    </>
  );
}

export default Facilities;
