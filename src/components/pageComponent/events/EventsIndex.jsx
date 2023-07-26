import React, { useState } from "react";
import Information from "../../pageComponent/tameplates/Information";
import { eventsData } from "./data/eventsData";
import classes from "./EventsIndex.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function EventsIndex() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = eventsData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(eventsData.length / itemsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages && i <= 3; i++) {
    pageNumbers.push(i);
  }

  const imgStyle = {
    height: "200px",
    wight: "100%",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Events</h2>
            <div className={classes.events}>
              {currentItems.map((item, index) => (
                <Information
                  img={item.img}
                  manth={item.month}
                  date={item.date}
                  time={item.time}
                  place={item.place}
                  lectureText={item.title}
                  imgStyle={imgStyle}
                  color
                  contentStyle={contentStyle}
                  width
                />
              ))}
            </div>

            <div className={classes.bottom}>
              {currentPage > 1 && (
                <i
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={classes.icon}
                >
                  <MdKeyboardArrowLeft />
                </i>
              )}
              {pageNumbers.map((number) => (
                <button
                  onClick={() => handlePageChange(number)}
                  className={classes.btn}
                >
                  {number}
                </button>
              ))}
              <i
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={classes.icon}
              >
                <MdKeyboardArrowRight />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsIndex;
