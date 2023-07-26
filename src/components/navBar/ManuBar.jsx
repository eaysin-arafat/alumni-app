import { Link, NavLink } from "react-router-dom";
import classes from "./ManuBar.module.css";

function ManuBar(props) {
  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundColor: `${props.backgroundColor}`,
        height: `${props.height}`,
        alignItems: `${props.alignItems}`,
        margin: `${props.margin}`,
        boxShadow: `${props.boxShadow}`,
        width: `${props.width}`,
        color: `${props.color}`,
        paddingTop: `${props.padding}`,
      }}
    >
      <div className={classes.navbar}>
        <NavLink to="/">
          <div className={classes.logo}>
            <p className={classes.fText}>Alumni</p>{" "}
            <p className={classes.lText}>University</p>
          </div>
        </NavLink>

        <div className={classes.dropdown}>
          <div
            className={classes.dropdownLink}
            style={{ color: `${props.Navcolor}` }}
          >
            <NavLink to="about">About</NavLink>
          </div>
          <div className={classes.dropdownContent}>
            <Link to="history">History</Link>
            <Link to="administration">Administration</Link>
            <Link to="ourCampus">Our Campus</Link>
            <Link to="cafeteria">Cafeteria</Link>
            <Link to="ourTeacher">Our Teacher</Link>
          </div>
        </div>

        <div className={classes.dropdown}>
          <div
            className={classes.dropdownLink}
            style={{ color: `${props.Navcolor}` }}
          >
            <NavLink to="academics">Academics</NavLink>
          </div>
          <div className={classes.dropdownContent}>
            <Link to="courses">Courses</Link>
            <Link to="calendar">Calendar</Link>
            <Link to="departments">Departments</Link>
          </div>
        </div>

        <NavLink to="admissions" style={{ color: `${props.Navcolor}` }}>
          Admission
        </NavLink>

        <NavLink to="schools" style={{ color: `${props.Navcolor}` }}>
          Schools
        </NavLink>

        <NavLink to="news" style={{ color: `${props.Navcolor}` }}>
          News
        </NavLink>

        <NavLink to="events" style={{ color: `${props.Navcolor}` }}>
          Events
        </NavLink>

        <div className={classes.dropdown}>
          <div
            className={classes.dropdownLink}
            style={{ color: `${props.Navcolor}` }}
          >
            <NavLink to="">Pages</NavLink>
          </div>
          <div className={classes.dropdownContent}>
            <Link to="shop">Shop</Link>
            <Link to="athletics">Athletics</Link>
            <Link to="donations">Donations</Link>
            <Link to="applicationsFAQ">FAQ</Link>
            <Link to="multimedia">Multimedia</Link>
            <Link to="priceTable">Price Table</Link>
            <Link to="timetable">Timetable</Link>
          </div>
        </div>

        <NavLink to="contactUs" style={{ color: `${props.Navcolor}` }}>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default ManuBar;
