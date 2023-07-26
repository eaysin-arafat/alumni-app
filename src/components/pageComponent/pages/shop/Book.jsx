import React from "react";
import classes from "./Book.module.css";
import { TbTruckDelivery } from "react-icons/tb";

function Book(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <img className={classes.image} src={props.img} alt="" />

          <div className={classes.textPart}>
            <p className={classes.category}>{props.category}</p>
            <h2 className={classes.bookName}> {props.bookName}</h2>
            <h3 className={classes.price}>${props.price}</h3>
          </div>
        </div>
        <div className={classes.hoverContent}>
          <div className={classes.hoverText}>
            <TbTruckDelivery />
            <p className={classes.text}>ADD TO CART</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
