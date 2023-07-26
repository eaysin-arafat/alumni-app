import React from "react";
import classes from "./Menu.module.css";

function Menu(props) {
  return (
    <>
      <div className={classes.mealList}>
        <h2>{props.foodTime}</h2>
        <div className={classes.foodDetailsLists}>
          <div className={classes.list}>
            <img className={classes.image} src={props.img1} alt="" />
            <div className={classes.foodDesc}>
              <h4>{props.foodTitle1}</h4>
              <p className={classes.foodDescText}>{props.foodDesc1}</p>
            </div>
          </div>
          <div className={classes.list}>
            <img className={classes.image} src={props.img2} alt="" />
            <div className={classes.foodDesc}>
              <h4>{props.foodTitle2}</h4>
              <p className={classes.foodDescText}>{props.foodDesc2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
