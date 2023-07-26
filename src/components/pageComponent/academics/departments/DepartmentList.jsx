import React from "react";
import CheckBox from "../../tameplates/CheckBox";
import classes from "./DepartmentList.module.css";
import img from "../../../../assets/emb61mxl.bmp";

function DepartmentList() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.departmentLists}>
              <img className={classes.image} src={img} alt="" />
              <h4>College of Business & Economics</h4>
              <div className={classes.departments}>
                <div className={classes.department}>
                  <CheckBox checkBoxText="Business" />
                  <CheckBox checkBoxText="Humanities & Science" />
                  <CheckBox checkBoxText="Education" />
                  <CheckBox checkBoxText="Egnineering" />
                  <CheckBox checkBoxText="Law" />
                  <CheckBox checkBoxText="Medicine" />
                </div>
              </div>
            </div>

            <div className={classes.departmentLists}>
              <img className={classes.image} src={img} alt="" />
              <h4>College of Business & Economics</h4>
              <div className={classes.departments}>
                <div className={classes.department}>
                  <CheckBox checkBoxText="Business" />
                  <CheckBox checkBoxText="Humanities & Science" />
                  <CheckBox checkBoxText="Education" />
                  <CheckBox checkBoxText="Egnineering" />
                  <CheckBox checkBoxText="Law" />
                  <CheckBox checkBoxText="Medicine" />
                </div>
              </div>
            </div>

            <div className={classes.departmentLists}>
              <img className={classes.image} src={img} alt="" />
              <h4>College of Business & Economics</h4>
              <div className={classes.departments}>
                <div className={classes.department}>
                  <CheckBox checkBoxText="Business" />
                  <CheckBox checkBoxText="Humanities & Science" />
                  <CheckBox checkBoxText="Education" />
                  <CheckBox checkBoxText="Egnineering" />
                  <CheckBox checkBoxText="Law" />
                  <CheckBox checkBoxText="Medicine" />
                </div>
              </div>
            </div>

            <div className={classes.departmentLists}>
              <img className={classes.image} src={img} alt="" />
              <h4>College of Business & Economics</h4>
              <div className={classes.departments}>
                <div className={classes.department}>
                  <CheckBox checkBoxText="Business" />
                  <CheckBox checkBoxText="Humanities & Science" />
                  <CheckBox checkBoxText="Education" />
                  <CheckBox checkBoxText="Egnineering" />
                  <CheckBox checkBoxText="Law" />
                  <CheckBox checkBoxText="Medicine" />
                </div>
              </div>
            </div>

            <div className={classes.departmentLists}>
              <img className={classes.image} src={img} alt="" />
              <h4>College of Business & Economics</h4>
              <div className={classes.departments}>
                <div className={classes.department}>
                  <CheckBox checkBoxText="Business" />
                  <CheckBox checkBoxText="Humanities & Science" />
                  <CheckBox checkBoxText="Education" />
                  <CheckBox checkBoxText="Egnineering" />
                  <CheckBox checkBoxText="Law" />
                  <CheckBox checkBoxText="Medicine" />
                </div>
              </div>
            </div>

            <div className={classes.departmentLists}>
              <img className={classes.image} src={img} alt="" />
              <h4>College of Business & Economics</h4>
              <div className={classes.departments}>
                <div className={classes.department}>
                  <CheckBox checkBoxText="Business" />
                  <CheckBox checkBoxText="Humanities & Science" />
                  <CheckBox checkBoxText="Education" />
                  <CheckBox checkBoxText="Egnineering" />
                  <CheckBox checkBoxText="Law" />
                  <CheckBox checkBoxText="Medicine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentList;
