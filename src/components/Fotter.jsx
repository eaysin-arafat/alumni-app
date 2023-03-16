import React from "react";
import { BiRadioCircle } from "react-icons/bi";
import classes from "../styles/Fotter.module.css";
import logo from "../assets/images/logo.png";

function Fotter() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.aboutInformation}>
              <p>INFORMATION ABOUT</p>
              <div className={classes.infromationAboutTitle}>
                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>
              </div>
            </div>

            <div className={classes.aboutInformation}>
              <p>INFORMATION ABOUT</p>
              <div className={classes.infromationAboutTitle}>
                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>
              </div>
            </div>

            <div className={classes.aboutInformation}>
              <p>INFORMATION ABOUT</p>
              <div className={classes.infromationAboutTitle}>
                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>

                <div className={classes.information}>
                  <BiRadioCircle />
                  <p>History</p>
                </div>
              </div>
            </div>

            <div className={classes.about}>
              <img src={logo} alt="" />

              <div className={classes.aboutItem}>
                <div className={classes.infoText}>
                  <BiRadioCircle />
                  <p>16-2, Boast Avenue Street, Ca 23653, USA</p>
                </div>
              </div>

              <div className={classes.aboutItem}>
                <div className={classes.infoText}>
                  <BiRadioCircle />
                  <p>16-2, Boast Avenue Street, Ca 23653, USA</p>
                </div>
              </div>

              <div className={classes.aboutItem}>
                <div className={classes.infoText}>
                  <BiRadioCircle />
                  <p>16-2, Boast Avenue Street, Ca 23653, USA</p>
                </div>
              </div>

              <div className={classes.aboutItem}>
                <div className={classes.infoText}>
                  <BiRadioCircle />
                  <p>16-2, Boast Avenue Street, Ca 23653, USA</p>
                </div>
              </div>

              <div className={classes.aboutItem}>
                <div className={classes.infoText}>
                  <BiRadioCircle />
                  <p>16-2, Boast Avenue Street, Ca 23653, USA</p>
                </div>
              </div>

              <div className={classes.aboutIcon}>
                <div className={classes.icons}>
                  <BiRadioCircle className={classes.icon} />
                  <BiRadioCircle className={classes.icon} />
                  <BiRadioCircle className={classes.icon} />
                  <BiRadioCircle className={classes.icon} />
                  <BiRadioCircle className={classes.icon} />
                  <BiRadioCircle className={classes.icon} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={classes.footerText}>
          Copyright © Secondary School Theme by <a href="/">Stylemix Themes</a>.
          All rights reserved
        </p>
      </div>
    </>
  );
}

export default Fotter;
