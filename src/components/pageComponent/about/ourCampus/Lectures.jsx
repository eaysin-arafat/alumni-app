import React from "react";
import { HoverMenu, NonhoverMenu } from "../../tameplates/HoverMenu";
import HoverButton from "../../tameplates/HoverButton";
import Information from "../../tameplates/Information";
import classes from "./Lectures.module.css";

function Lectures() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.menuContent}>
              <NonhoverMenu width="155px" nonHoveredText="Lectures" />
              <HoverMenu width="155px" hoveredText="Exhibitions" />
              <HoverMenu width="155px" hoveredText="Publications" />
              <HoverMenu width="155px" hoveredText="Design WorkShop" />
              <HoverMenu width="155px" hoveredText="Facilities" />
            </div>
            <p className={classes.lecturesText}>
              Throughout the year, nationally and internationally known
              architects, architectural scholars, and artists are invited to
              participate in the School’s weekly lecture series. The series is
              open to the public and is free of charge. In fall 2014, lecturers
              included:
            </p>
            <div className={classes.lectures}>
              <Information
                height="70px"
                width=" 65px"
                manth="March"
                date="12"
                borderBottom="1px solid #adadad"
                time="7:30"
                place="1 Infinity Str, Napa, CA 02138"
                lectureText="Lectur: Zaha Hadid -- Current Work"
              />
              <Information
                height="70px"
                width=" 65px"
                manth="March"
                date="12"
                borderBottom="1px solid #adadad"
                time="7:30"
                place="1 Infinity Str, Napa, CA 02138"
                lectureText="Lectur: Zaha Hadid -- Current Work"
              />
              <Information
                height="70px"
                width=" 65px"
                manth="March"
                date="12"
                // borderBottom="1px solid #adadad"
                time="7:30"
                place="1 Infinity Str, Napa, CA 02138"
                lectureText="Lectur: Zaha Hadid -- Current Work"
              />
              <Information
                height="70px"
                width=" 65px"
                manth="March"
                date="12"
                // borderBottom="1px solid #adadad"
                time="7:30"
                place="1 Infinity Str, Napa, CA 02138"
                lectureText="Lectur: Zaha Hadid -- Current Work"
              />
            </div>
            <div className={classes.hoverButton}>
              <HoverButton firstText="See all" lastText="lectures" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lectures;
