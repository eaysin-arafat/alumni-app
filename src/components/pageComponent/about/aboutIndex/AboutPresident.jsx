import React from "react";
import classes from "./AboutPresident.module.css";
import img from "../../../../assets/presidentImg.jpg";

function AboutPresident() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.flexContent}>
            <div className={classes.presidentDetails}>
              <h1>About President Lalon</h1>

              <p className={classes.firstPera}>
                Christopher Kane is the 23rd president of Smart University, and
                the Chris Argyris Professor of Politology. His presidential term
                began in July 2013.
              </p>
              <p className={classes.secondPera}>
                Prior to becoming president, Kane served as the provost of Smart
                University from 2008 to 2013. As provost, Kane facilitated
                strategic planning and initiatives such as: enhancing career
                development and mentoring opportunities for all Smart faculty
                members; promoting faculty diversity; creating the Office of
                Academic Integrity; establishing the University-wide Committee
                on Sexual Misconduct; developing the East Campus; and overseeing
                the Universitys budget during the global financial crisis.
              </p>
            </div>

            <div className={classes.presidentImg}>
              <img src={img} alt="" />
            </div>
          </div>
          <button>
            <span>Read f</span>ull profile
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutPresident;
