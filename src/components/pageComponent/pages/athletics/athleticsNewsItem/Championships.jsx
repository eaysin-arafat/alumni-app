import React from "react";
import classes from "./Championships.module.css";

function Championships(props) {
  return (
    <>
      <div className={classes.content}>
        <i>{props.icon}</i>
        <div className={classes.sprotsDetails}>
          <h2>{props.sportsName}</h2>
          {props.items.map((item) => (
            <>
              <p className={classes.leagueName}>{item.leagueName}</p>
              <p className={classes.time}>{item.time}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Championships;
