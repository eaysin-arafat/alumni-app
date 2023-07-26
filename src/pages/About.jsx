import React from "react";
import AboutCountUp from "../components/pageComponent/tameplates/AboutCountUp";
import AboutPresident from "../components/pageComponent/about/aboutIndex/AboutPresident";
import AboutSmart from "../components/pageComponent/about/aboutIndex/AboutSmart";
import Certifications from "../components/pageComponent/about/aboutIndex/Certifications";
import Mission from "../components/pageComponent/about/aboutIndex/Mission";
import PhotoGallary from "../components/pageComponent/about/aboutIndex/PhotoGallary";

function About() {
  return (
    <>
      <AboutSmart />
      <AboutPresident />
      <Mission />
      <PhotoGallary />
      <Certifications />
      <AboutCountUp />
    </>
  );
}

export default About;
