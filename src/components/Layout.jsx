import React from "react";
import TopBar from "./header/TopBar";
import ManuBar from "./header/ManuBar";
import classes from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <ManuBar />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
