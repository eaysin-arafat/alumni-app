import React from "react";
import AskQuestionForm from "../tameplates/AskQuestionForm";
import FAQProfile from "./FAQProfile";
import classes from "./BottomWrapper.module.css";

function BottomWrapper() {
  const element = (
    <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "55px" }}>
      Ask Admissions staff all your questions
    </h2>
  );
  return (
    <>
      <div className={classes.content}>
        <div className={classes.left}>
          <AskQuestionForm textElement={element} />
        </div>
        <div className={classes.right}>
          <FAQProfile />
        </div>
      </div>
    </>
  );
}

export default BottomWrapper;
