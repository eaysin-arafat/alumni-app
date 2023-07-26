import React from "react";
import { BiRadioCircle } from "react-icons/bi";
import classes from "./Fotter.module.css";
import logo from "../../assets/logo.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Fotter() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.appling}>
            <div className={classes.applingContent}>
              <p>Apply for Admission or some other Call to Action</p>
              <button className={classes.hovered}>
                CALL TO ACTION
                <IoIosArrowDroprightCircle
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                />
              </button>
            </div>
          </div>

          <div className={classes.content}>
            <div className={classes.fotterWrapper}>
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
