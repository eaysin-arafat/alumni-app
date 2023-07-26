import React from "react";
import { eventsData } from "../../../events/data/eventsData";
import Information from "../../../tameplates/Information";
import classes from "./UpcomingEvents.module.css";
import img from "../../../../../assets/event-background.jpg";

function UpcomingEvents() {
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px ",
    backgroundColor: "white",
  };

  const lactureStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 25px 15px 25px",
  };

  const contentStyle2 = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.titleEvent}>
              <img className={classes.image} src={img} alt="" />
              <Information
                manth={eventsData[0].month}
                date={eventsData[0].date}
                time={eventsData[0].time}
                place={eventsData[0].place}
                lectureText={eventsData[0].title}
                contentStyle={contentStyle}
                lactureStyle={lactureStyle}
              />
            </div>

            <div className={classes.eventList}>
              {eventsData.slice(1, 5).map((item, index) => (
                <Information
                  height="70px"
                  width="50%"
                  manth={item.month}
                  date={item.date}
                  time={item.time}
                  place={item.place}
                  lectureText={item.title}
                  color
                  contentStyle={contentStyle2}
                  // lactureStyle={lactureStyle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingEvents;
