import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./TimetableIndex.module.css";
import { HoverMenu, NonhoverMenu } from "../../tameplates/HoverMenu";
import Hour from "./Hour";

function TimetableIndex() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h2>Timetable</h2>
          <div className={classes.content}>
            <div className={classes.buttonGroup}>
              <Link onClick={() => handleButtonClick(1)}>
                <NonhoverMenu nonHoveredText="1st Grade" width="140px" />
              </Link>
              <Link onClick={() => handleButtonClick(2)}>
                <HoverMenu hoveredText="2st Grade" width="140px" />
              </Link>

              <Link onClick={() => handleButtonClick(3)}>
                <HoverMenu hoveredText="3st Grade" width="140px" />
              </Link>
              <Link onClick={() => handleButtonClick(4)}>
                <HoverMenu hoveredText="4st Grade" width="140px" />
              </Link>
              <Link onClick={() => handleButtonClick(5)}>
                <HoverMenu hoveredText="5st Grade" width="140px" />
              </Link>
              <Link onClick={() => handleButtonClick(6)}>
                <HoverMenu hoveredText="6st Grade" width="140px" />
              </Link>
              <Link onClick={() => handleButtonClick(7)}>
                <HoverMenu hoveredText="7st Grade" width="140px" />
              </Link>
            </div>

            <div className="timetableList">
              {activeButton === 1 && (
                <div className={classes.timetable}>
                  <p
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gridColumn: "1 / 2",
                      gridRow: "1",
                      //   borderBottom: "1.75px solid rgb(197, 197, 197)",
                      //   borderLeft: "1.7px solid rgb(197, 197, 197)",
                      borderRight: "1.7px solid rgb(197, 197, 197)",
                      borderTop: "none",
                      borderRadius: "3px",
                    }}
                  >
                    Monday
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gridColumn: "2 / 3",
                      gridRow: "1",
                      borderBottom: "1.75px solid rgb(197, 197, 197)",
                      //   borderLeft: "1.7px solid rgb(197, 197, 197)",
                      borderRight: "1.7px solid rgb(197, 197, 197)",
                      borderTop: "none",
                      borderRadius: "3px",
                    }}
                  >
                    Tuesday
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gridColumn: "3 / 4",
                      gridRow: "1",
                      borderBottom: "1.75px solid rgb(197, 197, 197)",
                      //   borderLeft: "1.7px solid rgb(197, 197, 197)",
                      borderRight: "1.7px solid rgb(197, 197, 197)",
                      borderTop: "none",
                      borderRadius: "3px",
                    }}
                  >
                    Wednesday
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gridColumn: "4 / 5",
                      gridRow: "1",
                      borderBottom: "1.75px solid rgb(197, 197, 197)",
                      //   borderLeft: "1.7px solid rgb(197, 197, 197)",
                      borderRight: "1.7px solid rgb(197, 197, 197)",
                      borderTop: "none",
                      borderRadius: "3px",
                    }}
                  >
                    Thursday
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gridColumn: "5 / 6",
                      gridRow: "1",
                      borderBottom: "1.75px solid rgb(197, 197, 197)",
                      //   borderLeft: "1.7px solid rgb(197, 197, 197)",
                      borderRight: "1.7px solid rgb(197, 197, 197)",
                      borderTop: "none",
                      borderRadius: "3px",
                    }}
                  >
                    Saturday
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gridColumn: "6 / 7",
                      gridRow: "1",
                      borderBottom: "1.75px solid rgb(197, 197, 197)",
                      //   borderLeft: "1.7px solid rgb(197, 197, 197)",
                      borderRight: "1.7px solid rgb(197, 197, 197)",
                      borderTop: "none",
                      borderRadius: "3px",
                    }}
                  >
                    Friday
                  </p>

                  <p
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gridColumn: "7 / 8",
                      gridRow: "1",
                      borderBottom: "1.75px solid rgb(197, 197, 197)",
                      //   borderLeft: "1.7px solid rgb(197, 197, 197)",
                      //   borderRight: "1.7px solid rgb(197, 197, 197)",
                      borderTop: "none",
                      borderRadius: "3px",
                    }}
                  >
                    Friday
                  </p>
                  <div style={{ gridColumn: "1 / 2", gridRow: "2 / 6" }}>
                    <Hour
                      backgroundColor="#8c1515"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div style={{ gridColumn: "1 / 2", gridRow: "6 / 10" }}>
                    <Hour
                      backgroundColor="rgb(99, 99, 99)"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "1 / 2",
                      gridRow: "14 / 18",
                    }}
                  >
                    <Hour
                      backgroundColor="#3277AE"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "2 / 3",
                      gridRow: "6 / 13",
                    }}
                  >
                    <Hour
                      backgroundColor="#3277AE"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "2 / 3",
                      gridRow: "14 / 18",
                    }}
                  >
                    <Hour
                      backgroundColor="rgb(99, 99, 99)"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "3 / 4",
                      gridRow: "2 / 10",
                    }}
                  >
                    <Hour
                      backgroundColor="#3277AE"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "3 / 4",
                      gridRow: "14 / 17",
                    }}
                  >
                    <Hour
                      backgroundColor="#8c1515"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "4 / 5",
                      gridRow: "2 / 6",
                    }}
                  >
                    <Hour
                      backgroundColor="rgb(99, 99, 99)"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "4 / 5",
                      gridRow: "6 / 10",
                    }}
                  >
                    <Hour
                      backgroundColor="#8c1515"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "5 / 6",
                      gridRow: "10 / 13",
                    }}
                  >
                    <Hour
                      backgroundColor="rgb(99, 99, 99)"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "5 / 6",
                      gridRow: "14 / 17",
                    }}
                  >
                    <Hour
                      backgroundColor="#8c1515"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "6 / 7",
                      gridRow: "2 / 8",
                    }}
                  >
                    <Hour
                      backgroundColor="#3277AE"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "6 / 7",
                      gridRow: "9 / 12",
                    }}
                  >
                    <Hour
                      backgroundColor="rgb(99, 99, 99)"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "7 / 8",
                      gridRow: "3 / 7",
                    }}
                  >
                    <Hour
                      backgroundColor="rgb(99, 99, 99)"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>

                  <div
                    style={{
                      gridColumn: "7 / 8",
                      gridRow: "9 / 13",
                    }}
                  >
                    <Hour
                      backgroundColor="rgb(99, 99, 99)"
                      subjectText="Math & Geometry"
                      time="7.30-8.15"
                      teacherName="K. Nomak"
                      roomNumber="35A"
                      labelName="All Lavels"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimetableIndex;
