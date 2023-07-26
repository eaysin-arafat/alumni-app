import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

function Menu(props) {
  return (
    <>
      <div className={classes.link}>
        <ul className={classes.linkConent}>
          <li>
            <Link>{props.category}</Link>
          </li>
          {props.data.map((item, index) => (
            <li key={index}>
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;
