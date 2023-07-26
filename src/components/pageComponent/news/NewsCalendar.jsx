import React, { useState } from "react";
import classes from "./NewsCalendar.module.css";

function NewsCalendar() {
  const [date] = useState(new Date());

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = [...Array(daysInMonth).keys()].map((i) => i + 1);

  // const prevMonth = () => setDate(new Date(currentYear, currentMonth - 1, 1));
  // const nextMonth = () => setDate(new Date(currentYear, currentMonth + 1, 1));

  return (
    <div className={classes.calendar}>
      <div className={classes.header}>
        <h2>Calendar</h2>
        {/* <div className={classes.prev} onClick={prevMonth}>
          {"<"}
        </div> */}
        <div className={classes.current}>
          {monthsOfYear[currentMonth]} {currentYear}
        </div>
        {/* <div className={classes.next} onClick={nextMonth}>
          {">"}
        </div> */}
      </div>
      <div className={classes.week}>
        {daysOfWeek.map((day) => (
          <div key={day} className={classes.daysDay}>
            {day}
          </div>
        ))}
      </div>
      <div className={classes.days}>
        {[...Array(firstDayOfMonth).keys()].map(() => (
          <div key={Math.random()} className={classes.emptyDay}></div>
        ))}
        {daysArray.map((day) => (
          <div
            key={day}
            className={
              day === date.getDate()
                ? `${classes.day} ${classes.currentDay}`
                : `${classes.day}`
            }
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCalendar;
