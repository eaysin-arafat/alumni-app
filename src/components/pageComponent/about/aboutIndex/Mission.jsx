import React, { useState } from "react";
import classes from "./Mission.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { dataCollection } from "./data/data";
import { TiTimes } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

function Mission() {
  const [accordion, setAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.missionPart}>
            <p className={classes.messionTitle}>Mission</p>
            <p className={classes.messionDesc}>
              Smart University is devoted to excellence in teaching, learning,
              and research, and to developing leaders in many disciplines who
              make a difference globally. The University, which is based in
              Cupertino and Silicon Valley, California, has an enrollment of
              over 20,000 degree candidates, including undergraduate, graduate,
              and professional students. Smart University has more than 360,000
              alumni around the world.
            </p>

            <div className={classes.missionList}>
              <div className={classes.lists}>
                <div className={classes.list}>
                  <RiCheckboxCircleLine />
                  Faculty of Architecture and the Built Environment
                </div>

                <div className={classes.list}>
                  <RiCheckboxCircleLine />
                  Smart Business School
                </div>

                <div className={classes.list}>
                  <RiCheckboxCircleLine />
                  Faculty of Science and Technology
                </div>

                <div className={classes.list}>
                  <RiCheckboxCircleLine />
                  Smart Law School
                </div>

                <div className={classes.list}>
                  <RiCheckboxCircleLine />
                  Faculty of Social Sciences and Humanities
                </div>

                <div className={classes.list}>
                  <RiCheckboxCircleLine />
                  Smart School of Media, Arts and Design
                </div>
              </div>
            </div>
          </div>

          <div className={classes.FAQPart}>
            <h2>FAQ</h2>
            <div className={classes.accorkingFAQ}>
              {dataCollection.map((item, index) => (
                <div
                  className={classes.accordion}
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div
                    className={
                      accordion === index
                        ? classes.active
                        : classes.titleInactive
                    }
                  >
                    <div className={classes.accorkingFAQHeading}>
                      <h3>{item.question}</h3>
                    </div>

                    <div>
                      {accordion === index ? (
                        <TiTimes
                          style={{
                            fontSize: "19px",
                            color: "#8c1515",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <FaPlus style={{ color: "#8c1515" }} />
                      )}
                    </div>
                  </div>
                  <div>
                    <p
                      className={
                        accordion === index
                          ? classes.inActive
                          : classes.accordingActive
                      }
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
