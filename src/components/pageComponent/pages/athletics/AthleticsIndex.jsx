import React from "react";
import classes from "./AthleticsIndex.module.css";
import img from "../../../../assets/uzksgc01.bmp";

function AthleticsIndex() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h2>Athletics</h2>
          <p className={classes.titleDescText}>
            To find out more about the Lions, follow the Smart Lions on their
            Facebook page, featuring news, photos and video from Director of
            Athletics Norman Irwin and coaches throughout each season.
          </p>
          <div className={classes.content}>
            <div className={classes.texts}>
              <p className={classes.firstText}>
                Students learn much more than physical skills through their
                participation in athletics. They benefit from the values of
                discipline, dedication, selflessness, and hard work derived from
                team participation. The collaborative experience of pursuing and
                attaining a common goal in athletics is unique, as it is
                combined with interscholastic competition.
              </p>
              <p className={classes.lastText}>
                Through this experience, students are able to develop courage as
                they take risks, strength while displaying finesse, competitive
                intensity while exhibiting generosity of spirit, and mental as
                well as physical endurance. While the focus is to facilitate the
                development of each student`s athletic potential, the greater
                hope is to instill motivation to continue lifelong physical
                activity.
              </p>
            </div>

            <div className={classes.img}>
              <img className={classes.image} src={img} alt="" />
              <div className={classes.imgDetails}>
                <p>Norman Irwin, </p> <span> Director of Athletics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AthleticsIndex;
