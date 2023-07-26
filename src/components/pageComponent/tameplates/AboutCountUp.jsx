import React from "react";
import classes from "./AboutCountUp.module.css";
import CounterUp from "./CounterUp";

function AboutCountUp() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <CounterUp
            start={0}
            end={13}
            duration={1}
            delay={0}
            title="Nobel laureates"
            description="bachelors recipients were employed"
          />

          <CounterUp
            start={0}
            end={13}
            duration={1}
            delay={0}
            title="Nobel laureates"
            description="bachelors recipients were employed"
          />

          <CounterUp
            start={0}
            end={113}
            duration={1.2}
            delay={0}
            title="Nobel laureates"
            description="bachelors recipients were employed"
          />

          <CounterUp
            icon="+"
            start={0}
            end={250}
            duration={1.5}
            delay={0}
            title="Nobel laureates"
            description="bachelors recipients were employed"
          />
        </div>
      </div>
    </>
  );
}

export default AboutCountUp;
