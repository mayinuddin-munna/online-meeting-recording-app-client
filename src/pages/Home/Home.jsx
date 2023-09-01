import React from "react";
import Poster from "./Poster";
import Banner from "./Banner/Banner";
import Reviews from "./Reviews/Reviews";
import Parallax from "./Parallax/Parallax";
import ReactTab from "./ReactTab/ReactTab";
import NoWorries from "./Noworries/NoWorries";
import Contact from "../Contact/Contact";
import UserGrowth from "./UserGrowth/UserGrowth";

const Home = () => {
  return (
    <>
      <Banner />
      <ReactTab />
      <NoWorries />
      <UserGrowth />
      <Parallax />
      <Reviews />
      <Poster />
      <Contact />
    </>
  );
};

export default Home;
