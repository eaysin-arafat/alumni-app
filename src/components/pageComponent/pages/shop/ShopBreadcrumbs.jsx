import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./ShopBreadcrumbs.module.css";
import Download from "../../tameplates/Download";

function ShopBreadcrumbs() {
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
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes.breadcrumbs}>{crumbs}</div>
            <h2>Shop</h2>
          </div>
          <div className={classes.shoppingCard}>
            <Download title="Download" desc="The Welcome Kit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopBreadcrumbs;
