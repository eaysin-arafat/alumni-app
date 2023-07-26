import React from "react";
import AboutMenu from "../../tameplates/AboutMenu";
import classes from "./OurTeacherIndex.module.css";

function OurTeacherIndex() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Our Teacher</h2>
            <h4>
              The Smart community has been having essential conversations about
              the need to increase and respect diversity and inclusion on
              campus.
            </h4>
            <p className={classes.OurTeacherText}>
              Mr. Christopher Kane is a member of the National Academy of
              Engineering and a Fellow of the American Institute of Aeronautics
              and Astronautics, the American Society for Engineering Education,
              and the American Society of Mechanical Engineers. She has received
              a number of recognitions for her research, teaching, and public
              service, including seven honorary doctorates and the Benjamin
              Garver Lamme Medal from the American Society of Engineering
              Education. In 2008 she received the Structures, Structural
              Dynamics, and Materials Award from the American Institute of
              Aeronautics and Astronautics.
            </p>
          </div>

          <div className={classes.aboutButton}>
            <AboutMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeacherIndex;
