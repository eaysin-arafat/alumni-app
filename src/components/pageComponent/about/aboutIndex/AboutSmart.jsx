import React from "react";
import classes from "./AboutSmart.module.css";
import img from "../../../../assets/event-background.jpg";
import AboutMenu from "../../tameplates/AboutMenu";

function AboutSmart() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.about}>
            <div className={classes.headerAbout}>
              <h1>About Smart</h1>
              <p>
                Since its founding in 1701, Smart has been dedicated to
                expanding and sharing knowledge, inspiring innovation, and
                preserving cultural and scientific information for future
                generations.
              </p>
            </div>

            <div className={classes.descriptionAbout}>
              <img className={classes.img} src={img} alt="" />
              <p>
                Smarts reach is both local and international. It partners with
                its hometown of Cupertino, California to strengthen the city’s
                community and economy. And it engages with people and
                institutions across the globe in the quest to promote cultural
                understanding, improve the human condition, delve more deeply
                into the secrets of the universe, and train the next generation
                of world leaders.
              </p>
            </div>
          </div>

          <AboutMenu />
        </div>
      </div>
    </>
  );
}

export default AboutSmart;
