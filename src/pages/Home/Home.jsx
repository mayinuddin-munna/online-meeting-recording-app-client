import React from "react";
import Poster from "./Poster";
import Banner from "./Banner/Banner"
import AboutClient from "./AboutClient";
import Reviews from "./Reviews/Reviews";
import Parallax from "./Parallax/Parallax";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
      <Reviews/>
    </>
  );
};

export default Home;
