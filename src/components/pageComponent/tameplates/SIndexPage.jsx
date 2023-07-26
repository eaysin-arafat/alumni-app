import React from "react";
import classes from "./SIndexPage.module.css";

function SIndexPage(props) {
  return (
    <>
      <div className={classes.content}>
        <h2>{props.header}</h2>
        <h4>{props.title}</h4>
        <div className={classes.imgDesc}>
          <img className={classes.image} src={props.img} alt="" />
          <div className={classes.desc}>
            <p className={classes.descText}>{props.desc}</p>
            <div className={classes.button}>{props.component}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SIndexPage;
