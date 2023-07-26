import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Breadcrumbs.module.css";

function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname

    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, arr) => {
      currentLink += `/${crumb}`;
      return (
        <div className={classes.crumb} key={crumb}>
          <Link
            className={index + 1 === arr.length ? `${classes.disable}` : ""}
            to={currentLink}
          >
            {crumb}
          </Link>
        </div>
      );
    });

  return (
    <>
      <div className={classes.breadcrumbs}>{crumbs}</div>
    </>
  );
}

export default Breadcrumbs;
