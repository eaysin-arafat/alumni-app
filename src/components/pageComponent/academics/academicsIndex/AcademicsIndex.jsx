import React from "react";
import classes from "./AcademicsIndex.module.css";
import img from "../../../../assets/academic.bmp";

function AcademicsIndex() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.texts}>
              <h2>Academics</h2>
              <h4>
                Smart is home to more than 20,000 students and 230,000 alumni
                with a wide variety of interests, ages and backgrounds, the
                University reflects the citys dynamic mix of populations.
              </h4>
              <p className={classes.textDesc}>
                Smart offers the kind of education needed for leadership in a
                rapidly changing world. With an enduring dedication to the
                pursuit of excellence, University offers unparalleled student
                experiences across a broad spectrum of academic environments.
                Explore Smart Universitys extensive, world-class online learning
                opportunities. The most current information about many academic
                programs of study at the Smart University will be found on the
                website of the school.
              </p>
            </div>
            <div className={classes.img}>
              <img className={classes.image} src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcademicsIndex;
