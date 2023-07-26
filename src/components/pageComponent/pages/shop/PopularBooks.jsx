import React from "react";
import classes from "./PopularBooks.module.css";

function PopularBooks(props) {
  return (
    <>
      <div className={classes.content}>
        <img className={classes.image} src={props.img} alt="" />
        <div className={classes.bookdetails}>
          <p className={classes.category}>{props.category}</p>
          <h2 className={classes.nameText}> {props.name}</h2>
        </div>
      </div>
    </>
  );
}

export default PopularBooks;
