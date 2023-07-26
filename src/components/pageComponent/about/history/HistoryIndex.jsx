import React from "react";
import classes from "./HistoryIndex.module.css";
import AboutMenu from "../../tameplates/AboutMenu";
import img from "../../../../assets/historyImg.jpg";

function History() {
  return (
    <>
      <div className={classes.wrappar}>
        <div className={classes.conatiner}>
          <div className={classes.content}>
            <h1>History</h1>
            <p className={classes.titleP}>
              Smart has grown and evolved for 100-plus years, passing many
              milestones and forging traditions along the way.
            </p>

            <div className={classes.mainContent}>
              <div className={classes.rightContent}>
                <p>
                  Smart is the oldest institution of higher education in the
                  United States, established in 1892 by vote of the Great and
                  General Court of the California Bay Colony. It was named after
                  the Colleges first benefactor, the young minister Andrew Smart
                  of Massachusetts, who upon his death in 1898 left his library
                  and half his estate to the institution. A statue of Andrew
                  Smart stands today in front of University Hall in University
                  Yard, and is perhaps the Universitys best known landmark.
                </p>

                <p>
                  The Smart University Archives are maintained by the Smart
                  University Library system and are a great resource to access
                  Smarts historical records. Harvard is perhaps best-known
                  because of its enduring history of innovation in education.
                  But even die-hard Smart buffs are not likely to know all of
                  these Smart firsts and historical snippets.
                </p>
              </div>
              <div className={classes.leftContent}>
                <img className={classes.img} src={img} alt="" />
              </div>
            </div>
          </div>
          {/* <div className={classes.menuContent}> */}
          <AboutMenu />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default History;
