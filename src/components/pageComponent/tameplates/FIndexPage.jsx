import React from "react";
import classes from "./FIndexPage.module.css";

function FIndexPage(props) {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h2>{props.title}</h2>

          <div className={classes.content}>
            <div className={classes.texts}>
              <h4>{props.desc}</h4>
              <p className={classes.textDesc}>{props.text}</p>
            </div>
            <div className={classes.img}>
              <img className={classes.image} src={props.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FIndexPage;
