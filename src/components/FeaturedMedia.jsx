import React, { useState } from "react";
import classes from "../styles/FeaturedMedia.module.css";
import img from "../assets/slider3.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function FeaturedMedia() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className={classes.container}>
        <ul>
          <li className={classes.featureContent}>
            <div className={classes.header}>
              <h2>Featured media</h2>
              <p>
                <span>See all</span> multimedia
              </p>
            </div>
            <div className={classes.features}>
              <div className={classes.feature}>
                <img src={img} alt="" className={classes.featureImg} />
                <h3>Open Days at the Smart</h3>
                <p>
                  You and your parents are welcome to visit Smart from 8:30 AM
                  to 5:30 PM Monday through Saturday, except on public holidays
                  and certain days throughout the year, which are noted on the
                  calendar.
                </p>
              </div>
              <div className={classes.featureLists}>
                <div className={classes.featureListItem}>
                  <img
                    src={img}
                    alt=""
                    className={classes.featureListItemImg}
                  />
                  <p>What during your Smart Campus journey surprised you?</p>
                </div>
                <div className={classes.featureListItem}>
                  <img
                    src={img}
                    alt=""
                    className={classes.featureListItemImg}
                  />
                  <p>What during your Smart Campus journey surprised you?</p>
                </div>
                <div className={classes.featureListItem}>
                  <img
                    src={img}
                    alt=""
                    className={classes.featureListItemImg}
                  />
                  <p>What during your Smart Campus journey surprised you?</p>
                </div>
                <div className={classes.featureListItem}>
                  <img
                    src={img}
                    alt=""
                    className={classes.featureListItemImg}
                  />
                  <p>What during your Smart Campus journey surprised you?</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className={classes.byTheNumbering}>
          <div className={classes.numberingContent}>
            <div className={classes.numberingHeader}>
              <p>SMART BY THE NUMBER</p>
              <div className={classes.liner}></div>
            </div>
            <div className={classes.numbering}>
              <div className={classes.numberOfClass}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <h2>
                    {counterOn && (
                      <CountUp start={0} end={89} duration={1} delay={0} />
                    )}
                    %
                  </h2>
                </ScrollTrigger>
                <h5>of class of 2014</h5>
                <p>bachelor's recipients were employed</p>
              </div>
              <div className={classes.numberOfClass}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <h2>
                    {counterOn && (
                      <CountUp start={0} end={89} duration={1} delay={0} />
                    )}
                    %
                  </h2>
                </ScrollTrigger>
                <h5>of class of 2014</h5>
                <p>bachelor's recipients were employed</p>
              </div>
              <div className={classes.numberOfClass}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <h2>
                    {counterOn && (
                      <CountUp start={0} end={89} duration={1} delay={0} />
                    )}
                    %
                  </h2>
                </ScrollTrigger>
                <h5>of class of 2014</h5>
                <p>bachelor's recipients were employed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedMedia;
