import React from "react";
import classes from "./SingleDepartment.module.css";

function SingleDepartment(props) {
  return (
    <>
      <div className={classes.content}>
        <img className={classes.image} src={props.img} alt="" />
        <div style={props.style}>
          <h2>{props.title}</h2>
          <p className={classes.departmentText}>{props.desc}</p>
          <div className={classes.departmentCategary}>{props.component}</div>
        </div>
      </div>
    </>
  );
}

export default SingleDepartment;
