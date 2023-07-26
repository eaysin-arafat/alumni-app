import React from "react";
import classes from "./AdministrationIndex.module.css";
import AboutMenu from "../../tameplates/AboutMenu";

function AdministrationIndex() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Administaration</h2>
            <p className={classes.titletext}>
              Smarts administration is responsible for the strategic vision for
              the University.
            </p>
            <p className={classes.descText}>
              By charter, Smart has two governing boards—the President and
              Fellows of Smart College and the Board of Overseers. The basic
              architecture of the two-board system is defined by the Smart
              Universitys charter, which is reflected in a series of documents
              dating to the mid-seventeenth century. Through their complementary
              efforts, the two boards perform the essential roles ordinarily
              associated with a board of trustees, while helping to shape the
              Universitys agenda, inquiring into the quality and progress of its
              activities, and assuring that Smart remains true to its mission.
            </p>
          </div>

          <div className={classes.aboutMenu}>
            <AboutMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdministrationIndex;
