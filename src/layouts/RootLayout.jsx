import { Outlet } from "react-router-dom";
import React from "react";
import TopBar from "../components/navBar/TopBar";
import ManuBar from "../components/navBar/ManuBar";
import Fotter from "../components/fotter/Fotter";
import Breadcrumbs from "../components/Breadcrumbs";
// import classes from "../styles/RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <nav>
        <TopBar />
        <ManuBar
          backgroundColor="white"
          alignItems="center"
          Navcolor="#002147"
          ImgMargin="0"
          boxShadow="box-shadow: 0px 15px 15px -15px #111"
          padding="17px"
        />
      </nav>
      <Breadcrumbs wrapperStyle={{ margin: "30px 90px 20px 90px" }} />

      <main>
        <Outlet />
      </main>

      <footer>
        <Fotter />
      </footer>
    </>
  );
}
