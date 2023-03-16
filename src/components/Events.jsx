import React from "react";
import classes from "../styles/Events.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

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
              <div className={classes.event}>
                <ul>
                  <li className={classes.date}>
                    <h2>12</h2>
                    <p>April</p>
                    <div className={classes.topSimble}>
                      <div className={classes.simble}></div>
                      <div className={classes.simble}></div>
                    </div>
                  </li>
                  <li>
                    <div className={classes.eventsContent}>
                      <div className={classes.eventInfo}>
                        <div className={classes.dateInfo}>
                          <AiOutlineClockCircle
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>8:00 am to 9.00 pm</p>
                        </div>
                        <div className={classes.locationInfo}>
                          <GoLocation
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>Seattle, IL85646, US</p>
                        </div>
                      </div>
                      <div className={classes.eventDetails}>
                        <p>
                          Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={classes.event}>
                <ul>
                  <li className={classes.date}>
                    <h2>12</h2>
                    <p>April</p>
                    <div className={classes.topSimble}>
                      <div className={classes.simble}></div>
                      <div className={classes.simble}></div>
                    </div>
                  </li>
                  <li>
                    <div className={classes.eventsContent}>
                      <div className={classes.eventInfo}>
                        <div className={classes.dateInfo}>
                          <AiOutlineClockCircle
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>8:00 am to 9.00 pm</p>
                        </div>
                        <div className={classes.locationInfo}>
                          <GoLocation
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>Seattle, IL85646, US</p>
                        </div>
                      </div>
                      <div className={classes.eventDetails}>
                        <p>
                          Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={classes.event}>
                <ul>
                  <li className={classes.date}>
                    <h2>12</h2>
                    <p>April</p>
                    <div className={classes.topSimble}>
                      <div className={classes.simble}></div>
                      <div className={classes.simble}></div>
                    </div>
                  </li>
                  <li>
                    <div className={classes.eventsContent}>
                      <div className={classes.eventInfo}>
                        <div className={classes.dateInfo}>
                          <AiOutlineClockCircle
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>8:00 am to 9.00 pm</p>
                        </div>
                        <div className={classes.locationInfo}>
                          <GoLocation
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>Seattle, IL85646, US</p>
                        </div>
                      </div>
                      <div className={classes.eventDetails}>
                        <p>
                          Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={classes.event}>
                <ul>
                  <li className={classes.date}>
                    <h2>12</h2>
                    <p>April</p>
                    <div className={classes.topSimble}>
                      <div className={classes.simble}></div>
                      <div className={classes.simble}></div>
                    </div>
                  </li>
                  <li>
                    <div className={classes.eventsContent}>
                      <div className={classes.eventInfo}>
                        <div className={classes.dateInfo}>
                          <AiOutlineClockCircle
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>8:00 am to 9.00 pm</p>
                        </div>
                        <div className={classes.locationInfo}>
                          <GoLocation
                            style={{
                              marginTop: "2px",
                              color: "#8c1515",
                              width: "15px",
                              height: "15px",
                            }}
                          />
                          <p>Seattle, IL85646, US</p>
                        </div>
                      </div>
                      <div className={classes.eventDetails}>
                        <p>
                          Lecture: Neil Verma: A Juggler on the Moon: On Tom
                          Stoppard`s Darkside
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Events;
