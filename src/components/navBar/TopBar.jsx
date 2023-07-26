import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./TopBar.module.css";

function TopBar() {
  return (
    <>
      <div className={classes.container}>
        <a href="/" className={classes.searchBtn}>
          <AiOutlineSearch />
        </a>
        <div className={classes.lists}>
          <ul className={classes.barList}>
            <li>
              <a href="/">Athletics</a>
            </li>
            <li>
              <a href="/">Staff</a>
            </li>
            <li>
              <a href="/">Donations</a>
            </li>
            <li>
              <a href="/">Anumni</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Research</a>
            </li>
            <li>
              <a href="/">My Account</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopBar;
