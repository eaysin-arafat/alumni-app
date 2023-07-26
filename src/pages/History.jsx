import React from "react";
import AboutCountUp from "../components/pageComponent/tameplates/AboutCountUp";
import HistoryIndex from "../components/pageComponent/about/history/HistoryIndex";
import HistoryProcessbar from "../components/pageComponent/about/history/smartHistory/HistoryProcessbar";

function History() {
  return (
    <>
      <HistoryIndex />
      <HistoryProcessbar />
      <AboutCountUp />
    </>
  );
}

export default History;
