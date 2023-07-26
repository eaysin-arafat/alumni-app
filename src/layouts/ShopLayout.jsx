import { Outlet } from "react-router-dom";
import React from "react";
import TopBar from "../components/navBar/TopBar";
import ManuBar from "../components/navBar/ManuBar";
import Fotter from "../components/fotter/Fotter";
import ShopBreadcrumbs from "../components/pageComponent/pages/shop/ShopBreadcrumbs";
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
          // margin="0 90px 0 0"
        />
      </nav>
      <ShopBreadcrumbs />

      <main>
        <Outlet />
      </main>

      <footer>
        <Fotter />
      </footer>
    </>
  );
}
