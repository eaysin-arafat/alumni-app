import React from "react";
import AboutMenu from "../../tameplates/AboutMenu";
import classes from "./CafeeriaIndex.module.css";
import img from "../../../../assets/cafe.bmp";

function CafeeriaIndex() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Cafeteria</h2>
            <p className={classes.titleText}>
              Smart University campus is a technological and creative
              playground. Smarts campus creates a stunning backdrop for all that
              happens within the University.
            </p>
            <div className={classes.descContent}>
              <div className={classes.descText}>
                <p className={classes.descTextOne}>
                  Full time General Service Manager on site, is responsible for
                  all catering and domestic services within the Smart
                  University. A wide selection of freshly made dishes is
                  available from the Dining Hall at breakfast, lunch and dinner,
                  with a salad bar always offered at lunch and dinner time along
                  with hot and cold vegetarian options.
                </p>
                <p className={classes.descTextTwo}>
                  Our Managers and Chefs are trained using their own specific
                  training course, so that they understand the company
                  philosophy to produce a food standard that can`t be bettered;
                  offering healthy eating with a balance between current eating
                  trends, good nutrition and fresh home-cooked food. Menus
                  rotate on a three weekly cycle.
                </p>
              </div>
              <div className={classes.imgContent}>
                <img className={classes.image} src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={classes.menuContent}>
            <AboutMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default CafeeriaIndex;
