import React from "react";
import RelatedInformation from "../RelatedInformation";
import HoverButton from "../../tameplates/HoverButton";
import Information from "../../tameplates/Information";
import CheckBox from "../../tameplates/CheckBox";
import classes from "./CourseIndex.module.css";

function CourseIndex() {
  const informationComponents = [
    <CheckBox
      backgroundColor=""
      color=""
      checkBoxText="Semester start and end dates, holidays"
    />,
    <CheckBox backgroundColor="" color="" checkBoxText="Graduate Division" />,
    <CheckBox backgroundColor="" color="" checkBoxText="Research at Smart" />,
    <CheckBox backgroundColor="" color="" checkBoxText="Accreditation" />,
    <CheckBox backgroundColor="" color="" checkBoxText="Bear Facts" />,
    <CheckBox
      backgroundColor=""
      color=""
      checkBoxText="Textbooks: Cal Student Store"
    />,
  ];

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.rightRow}>
              <h2>Courses</h2>
              <div className={classes.tableWrapper}>
                <ol>
                  <li>Course Name</li>
                  <li>Department</li>
                  <li>Semester</li>
                </ol>

                <ul>
                  <li>Algebra 1</li>
                  <li>Mathematics</li>
                  <li>Fall 2016</li>
                </ul>

                <ul>
                  <li>Algebra 2 {"(Period 4)"}</li>
                  <li>Mathematics</li>
                  <li>Winter Intensive 2016</li>
                </ul>

                <ul>
                  <li>AP Chemistry (Period 3)</li>
                  <li>Chemistry</li>
                  <li>Spring 2017 </li>
                </ul>

                <ul>
                  <li>AP Computer Science</li>
                  <li> Computer Science </li>
                  <li> Spring 2017 </li>
                </ul>

                <ul>
                  <li>AP Macroeconomics (Period 5)</li>
                  <li>Economics</li>
                  <li>Fall 2016 </li>
                </ul>

                <ul>
                  <li>AP Physics</li>
                  <li> Physics and Astronomy</li>
                  <li>Winter Intensive 2016 </li>
                </ul>

                <ul>
                  <li>AP Statistics (Period 1)</li>
                  <li>Physics and Astronomy </li>
                  <li>Fall 2016 </li>
                </ul>

                <ul>
                  <li>Biology</li>
                  <li> Biological Sciences </li>
                  <li>Spring 2017 </li>
                </ul>

                <ul>
                  <li>Calculus BC Period 4 (Period 4)</li>
                  <li>Mathematics</li>
                  <li>Autumn 2017 </li>
                </ul>
              </div>
            </div>
            <div className={classes.leftRow}>
              <div className={classes.importantDtaes}>
                <div className={classes.textAndButton}>
                  <h2 style={{ color: "#002147" }}>Important Dates</h2>
                  <div className={classes.hoverButton}>
                    <HoverButton firstText="Full" lastText="Calender" />
                  </div>
                </div>
                <Information
                  color="#002147"
                  borderBottom="none"
                  height="70px"
                  width="50%"
                  manth="March"
                  date="12"
                  time="7:30"
                  place="1 Infinity Str, Napa, CA 02138"
                  lectureText="Lecture: Neil Verma: A Juggler on the Moon: On Tom Stoppard`s Darkside"
                />
              </div>

              <RelatedInformation
                title="Related Information"
                components={informationComponents}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseIndex;
