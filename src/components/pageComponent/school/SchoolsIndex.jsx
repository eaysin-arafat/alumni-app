import React from "react";
import FIndexPage from "../tameplates/FIndexPage";
import img from "../../../assets/event-background.jpg";
import DepartmentList from "../academics/departments/DepartmentList";
function SchoolsIndex() {
  return (
    <>
      <FIndexPage
        title="Schools"
        desc=" Smart is home to more than 20,000 students and 230,000 alumni with a wide variety of interests, ages and backgrounds, the University reflects the citys dynamic mix of populations."
        text="Smart offers the kind of education needed for leadership in a rapidly changing world. With an enduring dedication to the pursuit of excellence, University offers unparalleled student experiences across a broad spectrum of academic environments. Explore Smart Universitys extensive, world-class online learning opportunities. The most current information about many academic programs of study at the Smart University will be found on the website of the school."
        img={img}
      />
      <DepartmentList />
    </>
  );
}

export default SchoolsIndex;
