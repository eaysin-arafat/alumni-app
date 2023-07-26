import React from "react";
import SingleDepartment from "../SingleDepartment";
import CheckBox from "../../tameplates/CheckBox";
import Information from "../../tameplates/Information";
import HoverButton from "../../tameplates/HoverButton";
import classes from "./Departmental.module.css";
import img from "../../../../assets/department.bmp";
import CounterUp from "../../tameplates/CounterUp";
import RelatedInformation from "../RelatedInformation";

function Departmental() {
  const component1 = [
    <CheckBox checkBoxText="Business" />,
    <CheckBox checkBoxText="Humanities & Science" />,
    <CheckBox checkBoxText="Education" />,
    <CheckBox checkBoxText="Egnineering" />,
    <CheckBox checkBoxText="Law" />,
    <CheckBox checkBoxText="Medicine" />,
  ];

  const component2 = [
    <CheckBox checkBoxText="Business" />,
    <CheckBox checkBoxText="Humanities & Science" />,
    <CheckBox checkBoxText="Education" />,
    <CheckBox checkBoxText="Egnineering" />,
    <CheckBox checkBoxText="Law" />,
    <CheckBox checkBoxText="Medicine" />,
  ];

  const component3 = [
    <CheckBox checkBoxText="Business" />,
    <CheckBox checkBoxText="Humanities & Science" />,
    <CheckBox checkBoxText="Education" />,
    <CheckBox checkBoxText="Egnineering" />,
    <CheckBox checkBoxText="Law" />,
    <CheckBox checkBoxText="Medicine" />,
  ];

  const component4 = [
    <CheckBox checkBoxText="Business" />,
    <CheckBox checkBoxText="Humanities & Science" />,
    <CheckBox checkBoxText="Education" />,
    <CheckBox checkBoxText="Egnineering" />,
    <CheckBox checkBoxText="Law" />,
    <CheckBox checkBoxText="Medicine" />,
  ];

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

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.rightRow}>
              <SingleDepartment
                style={style}
                img={img}
                title="Departments"
                desc="University`s academic enterprise is organized into 6 schools and colleges."
                component={component1}
              />

              <SingleDepartment
                style={style}
                img={img}
                title="Departments"
                desc="University`s academic enterprise is organized into 6 schools and colleges."
                component={component2}
              />
              <SingleDepartment
                style={style}
                img={img}
                title="Departments"
                desc="University`s academic enterprise is organized into 6 schools and colleges."
                component={component3}
              />
              <SingleDepartment
                style={style}
                img={img}
                title="Departments"
                desc="University`s academic enterprise is organized into 6 schools and colleges."
                component={component4}
              />
            </div>
            <div className={classes.leftRow}>
              <div className={classes.importantDtaes}>
                <Information
                  text="Important Dates"
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

                <div className={classes.hoverButton}>
                  <HoverButton firstText="Full" lastText="Academic Calender" />
                </div>
              </div>

              <div>
                <RelatedInformation
                  title="Related Information"
                  components={informationComponents}
                />
              </div>

              <div className={classes.numbering}>
                <div className={classes.numberingHeader}>
                  <p>SMART BY THE NUMBER</p>
                  <div className={classes.liner}></div>
                </div>

                <div className={classes.numberingGroup}>
                  <CounterUp
                    start={0}
                    end={13}
                    duration={1}
                    delay={0}
                    title="Nobel laureates"
                    description="bachelors recipients were employed"
                  />

                  <CounterUp
                    start={0}
                    end={13}
                    duration={1}
                    delay={0}
                    icon="%"
                    title="Nobel laureates"
                    description="bachelors recipients were employed"
                  />

                  <CounterUp
                    start={0}
                    end={13}
                    duration={1}
                    delay={0}
                    icon="%"
                    title="Nobel laureates"
                    description="bachelors recipients were employed"
                  />

                  <CounterUp
                    start={0}
                    end={13}
                    duration={1}
                    delay={0}
                    icon="#"
                    title="Nobel laureates"
                    description="bachelors recipients were employed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Departmental;
