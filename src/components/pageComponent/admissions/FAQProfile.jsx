import React from "react";
import img1 from "../../../assets/responseStaff/1534cv1c.bmp";
import img2 from "../../../assets/responseStaff/956ghimd.bmp";
import { TbBuildingCommunity } from "react-icons/tb";
import classes from "./FAQProfile.module.css";

function FAQProfile() {
  return (
    <>
      <div className={classes.staffProfile}>
        <div className={classes.profile}>
          <img className={classes.image} src={img1} alt="" />
          <div className={classes.desc}>
            <p className={classes.descText}>For the International Applicants</p>
            <h3>Birtney M.A. Thompson</h3>
            <div className={classes.phone}>
              <TbBuildingCommunity />
              <p>+1 212-326-3127</p>
            </div>
            <div className={classes.email}>
              <TbBuildingCommunity />
              <p>prep@smart.edu</p>
            </div>
          </div>
        </div>

        <div className={classes.profile}>
          <img className={classes.image} src={img2} alt="" />
          <div className={classes.desc}>
            <p className={classes.descText}>For the International Applicants</p>
            <h3>Birtney M.A. Thompson</h3>
            <div className={classes.phone}>
              <TbBuildingCommunity />
              <p>+1 212-326-3127</p>
            </div>
            <div className={classes.email}>
              <TbBuildingCommunity />
              <p>prep@smart.edu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQProfile;
