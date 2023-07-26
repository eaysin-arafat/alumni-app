import React from "react";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import classes from "./NotFoundItem.module.css";

function NotFoundItem() {
  return (
    <>
      <div className={classes.notFound}>
        <MdOutlineHourglassEmpty />
        <p className={classes.notFoundMessage}>
          No products were found matching your selection.
        </p>
      </div>
    </>
  );
}

export default NotFoundItem;
