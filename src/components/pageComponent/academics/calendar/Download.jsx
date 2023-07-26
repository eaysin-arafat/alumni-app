import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import classes from "./Download.module.css";

function Download() {
  return (
    <>
      <div className={classes.content}>
        <AiFillFilePdf />
        <div className={classes.text}>
          <h3>Download </h3>
          <p className={classes.downloadText}>Adobe Acrobat file, 123 KB</p>
        </div>
      </div>
    </>
  );
}

export default Download;
