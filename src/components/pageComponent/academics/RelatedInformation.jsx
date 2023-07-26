import React from "react";
import classes from "./RelatedInformation.module.css";

function RelatedInformation(props) {
  return (
    <>
      <div className={classes.relatedInformation}>
        <h2>{props.title}</h2>
        <div className={classes.checkBoxWrapper}>{props.components}</div>
      </div>
    </>
  );
}

export default RelatedInformation;
