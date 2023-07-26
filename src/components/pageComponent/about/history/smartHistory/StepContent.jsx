import React from "react";
import classes from "./StepContent.module.css";
import { contentData } from "./contentData";

function StepContent(props) {
  return (
    <div className="text-left">
      {contentData[props.step - 1].map((item, index) => {
        return (
          <>
            <div key={index} className={classes.container}>
              <div className={classes.prevImage}>
                <img className={classes.prevImg} src={item.img} alt="" />
              </div>

              <div className={classes.content}>
                <img className={classes.contentImag} src={item.img} alt="" />

                <div className={classes.Contentdesc}>
                  <h2>{item.year}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>

              <img className={classes.nextImg} src={item.img} alt="" />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default StepContent;
