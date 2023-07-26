import React from "react";
import AdmissionsIndex from "../components/pageComponent/admissions/AdmissionsIndex";
import ApplicationTimeline from "../components/pageComponent/admissions/ApplicationTimeline";
import StudingPage from "../components//pageComponent/homePage/StudingPage";
import BottomWrapper from "../components/pageComponent/admissions/BottomWrapper";

function Admissions() {
  return (
    <>
      <AdmissionsIndex />
      <ApplicationTimeline />
      <StudingPage />
      <BottomWrapper />
    </>
  );
}

export default Admissions;
