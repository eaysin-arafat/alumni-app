import React from "react";
import classes from "./ProcessContent.module.css";

function ProcessContent(props) {
  return (
    <>
      <div className={classes.stepperContent}>
        <div className={classes.stepProcess}></div>
        <p className={classes.subtitle}>{props.year}</p>
      </div>
    </>
  );
}

export default ProcessContent;
