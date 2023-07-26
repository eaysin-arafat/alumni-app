import React from "react";
import classes from "./Info.module.css";
function Info() {
  return (
    <>
      <div className={`${classes.container}`}>
        <div className={`${classes.content} ${classes.firstChild}`}>
          <p>SCHOOLS</p>
          <h3>21 Awsome Things About Music at Smart</h3>
        </div>
        <div className={classes.content}>
          <p>SCHOOLS</p>
          <h3>21 Awsome Things About Music at Smart</h3>
        </div>
        <div className={classes.content}>
          <p>SCHOOLS</p>
          <h3>21 Awsome Things About Music at Smart</h3>
        </div>
        <div className={classes.content}>
          <p>SCHOOLS</p>
          <h3>21 Awsome Things About Music at Smart</h3>
        </div>
      </div>
    </>
  );
}

export default Info;
