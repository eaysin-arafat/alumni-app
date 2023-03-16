import React from "react";
import classes from "../../styles/ManuBar.module.css";
import logo from "../../assets/images/logo.png";

function ManuBar() {
  return (
    <div className={classes.navbar} style={{ backgroundColor: "transparent" }}>
      <a href="#home">
        <img src={logo} alt="#" className={classes.img} />
      </a>

      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>About</button>
        <div className={classes.dropdownContent}>
          <a href="/">History</a>
          <a href="/">Administration</a>
          <a href="/">Our Campus</a>
          <a href="/">Cafeteria</a>
          <a href="/">Our Teacher</a>
        </div>
      </div>

      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Academics</button>
        <div className={classes.dropdownContent}>
          <a href="/">Courses</a>
          <a href="/">Calendar</a>
          <a href="/">Departments</a>
        </div>
      </div>

      <a href="#home">Admission</a>

      <a href="#news">News</a>

      <a href="#news">Event</a>

      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Page</button>
        <div className={classes.dropdownContent}>
          <a href="/">Shop</a>
          <a href="/">Athletics</a>
          <a href="/">Donations</a>
          <a href="/">FAQ</a>
          <a href="/">Multimedia</a>
          <a href="/">Price Table</a>
          <a href="/">Research</a>
          <a href="/">Timetable</a>
          <a href="/">Typography</a>
          <a href="/">Shortcodes</a>
        </div>
      </div>

      <a href="#news">Contact Us</a>
    </div>
  );
}

export default ManuBar;
