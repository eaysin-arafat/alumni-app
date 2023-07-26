import React from "react";
import classes from "./Events.module.css";
import Event from "./Event";

function Events() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <header>
            <h1>Events</h1>
            <p>
              <span>See m</span>ore events
            </p>
          </header>
          <main>
            <div className={classes.events}>
              <Event
                date="12"
                month="April"
                time="8:00 am to 9:00 pm"
                place="Seattle, IL85646, US"
                desc="Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside"
              />

              <Event
                date="12"
                month="April"
                time="8:00 am to 9:00 pm"
                place="Seattle, IL85646, US"
                desc="Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside"
              />

              <Event
                date="12"
                month="April"
                time="8:00 am to 9:00 pm"
                place="Seattle, IL85646, US"
                desc="Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside"
              />

              <Event
                date="12"
                month="April"
                time="8:00 am to 9:00 pm"
                place="Seattle, IL85646, US"
                desc="Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Events;
