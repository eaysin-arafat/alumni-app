import React from "react";
import classes from "../styles/StudingPage.module.css";
import img from "../assets/slider2.jpg";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function StudingPage() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Studing at Smart</h2>

            <div className={classes.contentLists}>
              <a href="/">
                <div className={classes.contentList}>
                  <img src={img} alt="" />
                  <div className={classes.contentOverLay}>
                    <h3>Undergraduae Admission</h3>
                    <h5>
                      Chrishtopher Kane is the 23rd president of Smart
                      University, and the Chris Argyris
                    </h5>
                    <p>Read More</p>
                  </div>
                </div>
              </a>

              <a href="/">
                <div className={classes.contentList}>
                  <img src={img} alt="" />
                  <div className={classes.contentOverLay}>
                    <h3>Undergraduae Admission</h3>
                    <h5>
                      Chrishtopher Kane is the 23rd president of Smart
                      University, and the Chris Argyris
                    </h5>
                    <p>Read More</p>
                  </div>
                </div>
              </a>

              <a href="/">
                <div className={classes.contentList}>
                  <img src={img} alt="" />
                  <div className={classes.contentOverLay}>
                    <h3>Undergraduae Admission</h3>
                    <h5>
                      Chrishtopher Kane is the 23rd president of Smart
                      University, and the Chris Argyris
                    </h5>
                    <p>Read More</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

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
      </div>
    </>
  );
}

export default StudingPage;
