import React from "react";
import HomeImage from "../../assets/bunner-image/bunner-image.png";
import HomeIcon from "../../assets/home-icon.png";
import Parallax from "./Parallax/Parallax";
import Poster from "./Poster";
import AboutClient from "./AboutClient";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
    </>
  );
};

export default Home;
