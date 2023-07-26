import React, { useState } from "react";
import StepContent from "./StepContent";
import classes from "./HistoryProcessbar.module.css";
import { contentData } from "./contentData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import MultiStepProgressBar from "./MultiStepProgressBar";

function HistoryProcessbar() {
  const [index, setIndex] = useState(1);

  const contentLength = contentData.length;

  const prevousButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index >= 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h1 style={{ margin: "0 90px" }}> Smart’s history timeline</h1>
          <div className={classes.processContent}>
            <div className={classes.processBar}>
              <MultiStepProgressBar step={index} />
            </div>
            <div className={classes.processButton}>
              <div className={classes.buttonGroup}>
                <button className={classes.prevButton} onClick={prevousButton}>
                  <MdKeyboardArrowLeft />
                </button>
                <button
                  className={classes.nextButton}
                  disabled={index === contentLength}
                  onClick={nextButton}
                >
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className={classes.mainContent}>
            <StepContent step={index} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryProcessbar;
