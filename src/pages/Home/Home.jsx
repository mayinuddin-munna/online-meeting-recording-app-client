import React from "react";
import Poster from "./Poster";
import Banner from "./Banner/Banner"
import AboutClient from "./AboutClient";
import Reviews from "./Reviews/Reviews";
import Parallax from "./Parallax/Parallax";
import ReactTab from "./ReactTab/ReactTab";
// import NoWorries from "./Noworries/NoWorries";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
      <Reviews/>
      <ReactTab/>
      {/* <NoWorries/> */}
    </>
  );
};

export default Home;
