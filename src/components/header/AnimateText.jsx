import React, { useState, useEffect } from "react";
import classes from "../../styles/AnimateText.module.css";
import { SliderTextData } from "./data/slider-data";
import { MdKeyboardArrowRight } from "react-icons/md";

function AnimateText() {
  const [textIndex, setTextIndex] = useState(0);
  const textInTimer = 3000;
  const textOutTimer = 2800;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex + 1) % SliderTextData.length);
    }, textInTimer + textOutTimer);

    return () => {
      clearInterval(intervalId);
    };
  }, [textIndex]);

  const activeTextIndex = textIndex % SliderTextData.length;

  return (
    <section className={classes.home}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.homeText}>
            <p className={classes.animateText}>
              {SliderTextData.map((text, i) => (
                <span
                  key={i}
                  className={
                    i === activeTextIndex
                      ? `${classes.textIn}`
                      : `${classes.textOut}`
                  }
                >
                  <h2>{text.title}</h2>

                  <h5>{text.header}</h5>
                  <p>{text.desc}</p>
                  <button>
                    {text.button}
                    <MdKeyboardArrowRight />
                  </button>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimateText;
