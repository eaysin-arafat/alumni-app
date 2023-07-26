import React from "react";
import classes from "./Audio.module.css";
import HoverButton from "../../tameplates/HoverButton";

function Audio() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.top}>
              <h2>Featured audio</h2>
              <HoverButton firstText="See all" lastText="audio" />
            </div>

            <div className={classes.main}>
              <div className={classes.soundcloud}>SOUNDCLOUD</div>
              <div className={classes.soundcloud}>SOUNDCLOUD</div>
            </div>

            <div className={classes.bottom}>
              <div className={classes.text}>
                <h3>Annual Athena Lecture: Towards a silent aircraft</h3>
                <p className={classes.descText}>
                  You and your parents are welcome to visit Smart from 8:30 AM
                  to 5:30 PM Monday through Saturday, except on public holidays
                  and certain days throughout the year, which are noted on the
                  calendar.
                </p>
              </div>

              <div className={classes.text}>
                <h3>Annual Athena Lecture: Towards a silent aircraft</h3>
                <p className={classes.descText}>
                  You and your parents are welcome to visit Smart from 8:30 AM
                  to 5:30 PM Monday through Saturday, except on public holidays
                  and certain days throughout the year, which are noted on the
                  calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Audio;
