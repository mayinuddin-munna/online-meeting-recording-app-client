import React from "react";
import Poster from "./Poster";
import Banner from "./Banner/Banner"
import AboutClient from "./AboutClient";
import Reviews from "./Reviews/Reviews";
import Parallax from "./Parallax/Parallax";
import NoWorries from "./Noworries/NoWorries";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
      <Reviews/>
      <NoWorries/>
    </>
  );
};

export default Home;
