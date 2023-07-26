import React, { useState } from "react";
import Donation from "./Donation";
import { donationData } from "./data/donationData";
import classes from "./DonationsIndex.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function DonationsIndex() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = donationData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(donationData.length / itemsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages && i <= 3; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h2>Donations</h2>

          <div className={classes.donationList}>
            {currentItems.map((donation, index) => (
              <Donation
                img={donation.img}
                title={donation.title}
                donatedAmount={donation.donatedAmount}
                goalAmount={donation.goalAmount}
                endDate={donation.endDate}
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
    </>
  );
}

export default DonationsIndex;
