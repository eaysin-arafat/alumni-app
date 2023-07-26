import React, { useState, useEffect } from "react";
import classes from "./Donation.module.css";

function Donation({ donatedAmount, goalAmount, endDate, img, title }) {
  const [percentageComplete, setPercentageComplete] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const percentage = Math.round((donatedAmount / goalAmount) * 100);
    setPercentageComplete(percentage);

    const today = new Date();
    const end = new Date(endDate);
    const diffTime = Math.abs(end - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, [donatedAmount, goalAmount, endDate]);

  return (
    <>
      <div className={classes.content}>
        <div className={classes.header}>
          <img className={classes.image} src={img} alt="" />
          <h3>{title}</h3>
        </div>

        <div className={classes.process}>
          <div className={classes.progressBarText}>
            <p
              className={classes.processDetailsText}
            >{`$${donatedAmount} raised of $${goalAmount} goal`}</p>
            {donatedAmount === goalAmount ? (
              <p>Thank You!</p>
            ) : (
              <p>{`${daysLeft} days left`}</p>
            )}
          </div>
          <div className={classes.progressBar}>
            <div
              className={classes.progressBarFill}
              style={{ width: `${percentageComplete}%` }}
            >
              <span className={classes.increaseIcon}></span>
            </div>
          </div>
        </div>

        <div className={classes.button}>
          <button className={classes.btn}>Has Been Completed</button>
        </div>
      </div>
    </>
  );
}

export default Donation;
