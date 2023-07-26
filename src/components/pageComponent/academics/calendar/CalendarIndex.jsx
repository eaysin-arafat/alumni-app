import React from "react";
import classes from "./CalendarIndex.module.css";
import Download from "./Download";
import Month from "./Month";
import AboutCountUp from "../../tameplates/AboutCountUp";

function CalendarIndex() {
  const decembarDesc = ["21, First Day of Winter Break"];
  const februaryDesc = [
    "12, Lincolm Day Holiday",
    "15, Washington Day Holiday",
  ];
  const aprilDesc = ["21, First Day of Winter Break"];
  const julyDesc = ["4, Independence Day Holiday", "21, Last Day of School"];
  const januaryDesc = ["19, School Resumes"];
  const marchDesc = ["28, Spring Break Begins"];
  const mayDesc = ["27, Non-Instructional Day", "30, Memorial Day Holiday"];

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2 className={classes.titleText}>Academic </h2>

            <div className={classes.yearLists}>
              <div className={classes.firstList}>
                <div className={classes.year}>
                  <h2>2018-2019</h2>
                  <div className={classes.monthWrapper}>
                    <Month month="December" dayDesc={decembarDesc} />
                    <Month month="February" dayDesc={februaryDesc} />
                    <Month month="April" dayDesc={aprilDesc} />
                    <Month month="July" dayDesc={julyDesc} />
                    <Month month="January" dayDesc={januaryDesc} />
                    <Month month="March" dayDesc={marchDesc} />
                    <Month month="May" dayDesc={mayDesc} />
                    <Download />
                  </div>
                </div>
              </div>

              <div className={classes.secondList}>
                <div className={classes.year}>
                  <h2>2018-2019</h2>
                  <div className={classes.monthWrapper}>
                    <Month month="December" dayDesc={decembarDesc} />
                    <Month month="February" dayDesc={februaryDesc} />
                    <Month month="April" dayDesc={aprilDesc} />
                    <Month month="July" dayDesc={julyDesc} />
                    <Month month="January" dayDesc={januaryDesc} />
                    <Month month="March" dayDesc={marchDesc} />
                    <Month month="May" dayDesc={mayDesc} />
                    <Download />
                  </div>
                </div>
              </div>
            </div>
            <div className="countUp">
              <AboutCountUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalendarIndex;
