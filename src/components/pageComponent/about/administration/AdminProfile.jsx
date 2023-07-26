import React from "react";
import classes from "./AdminProfile.module.css";
import SingleProfile from "./SingleProfile";

function AdminProfiel() {
  return (
    <>
      <div className={classes.conainer}>
        <div className={classes.content}>
          <div>
            <SingleProfile />
          </div>
          <div className={classes.border}></div>
          <div>
            <SingleProfile />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfiel;
