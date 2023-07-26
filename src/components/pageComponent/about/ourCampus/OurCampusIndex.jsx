import React from "react";
import AboutMenu from "../../tameplates/AboutMenu";
import classes from "./OurCampusIndex.module.css";
import video from "../../../../assets/Anjan Dutta-1994.mp4";

function OurCampusIndex() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Our Campus</h2>
            <p className={classes.titleText}>
              Smart University campus is a technological and creative
              playground. Smarts campus creates a stunning backdrop for all that
              happens within the University.
            </p>
            <div className={classes.videoDesc}>
              <p className={classes.videoText}>
                At East Campus, there is extensive laboratory space where
                experts from diverse disciplines are working side by side using
                innovative technologies to address important issues in science,
                art conservation, health, energy, and the environment. Scholars
                from Smarts libraries and museums are employing the latest
                digital imaging technology to conserve Smarts vast collections,
                while also the science of preservation.
              </p>
              <video className={classes.video} src={video}></video>
            </div>
          </div>

          <div className={classes.aboutMenu}>
            <AboutMenu />
            <div className={classes.welcomeKit}>
              <a href="/">
                <div className={classes.internalContent}>
                  <p className={classes.welcomeKitText}>Download</p>
                  <h2 className={classes.welcomeKitTitle}>The Welcome Kit</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCampusIndex;
