import React from "react";
import classes from "./HoverMenu.module.css";

export const HoverMenu = (props) => {
  return (
    <>
      <div className={classes.hoverMenu}>
        <ul>
          <li
            style={{ width: `${props.width}` }}
            className={classes.hoveredText}
          >
            {props.hoveredText}
          </li>
        </ul>
      </div>
    </>
  );
};

export const NonhoverMenu = (props) => {
  return (
    <>
      <div className={classes.hoverMenu}>
        <ul>
          <li
            style={{ width: `${props.width}` }}
            className={classes.nonHoveredText}
          >
            {props.nonHoveredText}
          </li>
        </ul>
      </div>
    </>
  );
};
