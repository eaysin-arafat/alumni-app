import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import News from "../components/News";
import Events from "../components/Events";
import FeaturedMedia from "../components/FeaturedMedia";
import StudingPage from "../components/StudingPage";
import Fotter from "../components/Fotter";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Info />
        <News />
        <Events />
        <FeaturedMedia />
        <StudingPage />
        <Fotter />
      </div>
    </>
  );
}

export default Home;
