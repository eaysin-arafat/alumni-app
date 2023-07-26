import React from "react";
import { Link } from "react-router-dom";
import classes from "./AboutMenu.module.css";

function AboutMenu() {
  return (
    <>
      <div className={classes.link}>
        <ul className={classes.linkConent}>
          <li>
            <Link to="history">History</Link>
          </li>
          <li>
            <Link to="administration">Administration</Link>
          </li>
          <li>
            <Link to="ourCampus">Our Campus</Link>
          </li>
          <li>
            <Link to="cafeteria">Cafeteria</Link>
          </li>
          <li>
            <Link to="ourTeacher">Our Teacher</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutMenu;
