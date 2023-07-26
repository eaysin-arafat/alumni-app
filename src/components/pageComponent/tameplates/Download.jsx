import React from "react";
import classes from "./Download.module.css";

function Download(props) {
  return (
    <>
      <div className={classes.shoppingCard}>
        <div className={classes.card}>
          <h2>{props.title}</h2>
          <p className={classes.cardText}>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Download;
