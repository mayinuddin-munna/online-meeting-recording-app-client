import React from "react";
import Parallax from "./Parallax/Parallax";
import Poster from "./Poster";
import AboutClient from "./AboutClient";
import Banner from "./Banner/Banner"
// import Reviews from "./Reviews/Reviews";
import Video from "./Video";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
      {/* <Reviews/> */}
      <Testimonials/>
    </>
  );
};

export default Home;
