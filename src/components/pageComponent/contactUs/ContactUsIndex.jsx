import React from "react";
import classes from "./ContactUsIndex.module.css";
import AskQuestionForm from "../tameplates/AskQuestionForm";
import Map from "./Map";
import img from "../../../assets/uzksgc01.bmp";

function ContactUsIndex() {
  const style = {
    fontSize: "28px",
    marginBottom: "24px",
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h2>Contact Us</h2>
          <div className={classes.content}>
            <div className={classes.left}>
              <img className={classes.image} src={img} alt="" />
              <div className={classes.info}>
                <p>#1 Infinity Street, Cupertino, CA 95014, USA</p>
                <p>#Call Free: +1 376-226-3126</p>
                <p>#Fax: +1 212-376-5575</p>
                <p>#smart.edu</p>
                <p>#info@smartu.edu</p>
                <p>#Mon — Sat: 9AM — 6PM</p>
              </div>
            </div>

            <div className={classes.right}>
              <div className={classes.map}>
                <Map />
              </div>
              <AskQuestionForm textStyle={style} textElement="Feedback Form" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsIndex;
