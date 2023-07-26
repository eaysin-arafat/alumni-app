import React from "react";
import SIndexPage from "../tameplates/SIndexPage";
import img from "../../../assets/tafxxurp.bmp";
import HoverButton from "../../pageComponent/tameplates/HoverButton";
import classes from "./AdmissionsIndex.module.css";

function AdmissionsIndex() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.conatiner}>
          <div className={classes.content}>
            <SIndexPage
              header="Admissions"
              title=" We consider each applicant to Smart University as a whole person,
            and put enormous care into evaluating every application."
              img={img}
              desc="Each applicant to Smart University is considered with great
                care. We hope you will explore the information in this section
                to understand what we look for in our admissions process. Early
                Action applicants apply by the November 1, 2016 deadline and
                hear from us by mid-December. If you apply to Smart University
                under our Early Action program, you may also apply at the same
                time to any public college/university or to foreign universities
                but you are restricted from applying to other private
                universities Early Action and Early Decision programs. You may
                apply under our Regular Decision program until January 1, 2016."
              component={
                <HoverButton firstText="View " lastText="details and apply" />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionsIndex;
