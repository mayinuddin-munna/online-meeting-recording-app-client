import React from "react";
import Parallax from "./Parallax/Parallax";
import Poster from "./Poster";
import AboutClient from "./AboutClient";
import Banner from "./Banner/Banner";
import Testimonials from "./Testimonials/Testimonials";
import Video from "./Video";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
      <Testimonials/>
      <Video/>
    </>
  );
};

export default Home;
