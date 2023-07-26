import React from "react";
import classes from "./AskQuestionForm.module.css";

function AskQuestionForm(props) {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div style={props.textStyle}> {props.textElement}</div>
          <div className={classes.content}>
            <form className={classes.form} action="">
              <div className={classes.formContent}>
                <div className={classes.inputArea}>
                  <div className={classes.inputs}>
                    <input placeholder="Name *" type="text" />
                    <input placeholder="E-mail *" type="text" />
                    <input placeholder="Phone *" type="text" />
                  </div>
                  <textarea
                    placeholder="Message *"
                    className={classes.textArea}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button className={classes.button} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AskQuestionForm;
