import React from "react";
import classes from "./StudingPage.module.css";
import img from "../../../assets/slider2.jpg";

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
      </div>
    </>
  );
}

export default StudingPage;
