import { useState } from "react";
import classes from "./CounterUp.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterUp(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div className={classes.numberOfClass}>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <h2>
            {counterOn && (
              <CountUp
                start={props.start}
                end={props.end}
                duration={props.duration}
                delay={props.delay}
              />
            )}
            {props.icon}
          </h2>
        </ScrollTrigger>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default CounterUp;
