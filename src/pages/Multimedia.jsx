import React from "react";
import MultimediaIndex from "../components/pageComponent/pages/multimedia/MultimediaIndex";
import Videos from "../components/pageComponent/pages/multimedia/Videos";
import Photos from "../components/pageComponent/pages/multimedia/Photos";
import Audio from "../components/pageComponent/pages/multimedia/Audio";

function Multimedia() {
  return (
    <>
      <MultimediaIndex />
      <Videos />
      <Photos />
      <Audio />
    </>
  );
}

export default Multimedia;
