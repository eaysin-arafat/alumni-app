import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { contentData } from "./contentData";
import ProcessContent from "./ProcessContent";
import "./MultiStepProgressBar.css";

const MultiStepProgressBar = (props, { page, onPageNumberClick }) => {
  const stepLength = contentData.length - 1;

  return (
    <ProgressBar
      percent={((props.step - 1) * 100) / stepLength}
      height={4}
      filledBackground="linear-gradient(to right, #8c1515, #8c1515)"
    >
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            onClick={() => onPageNumberClick("1")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            <ProcessContent
              accomplished={accomplished}
              index="1"
              year={contentData[1][0].year}
            />
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
