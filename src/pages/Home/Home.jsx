import React from "react";
import Parallax from "./Parallax/Parallax";
import Poster from "./Poster";
import AboutClient from "./AboutClient";
import Banner from "./Banner/Banner";
<<<<<<< HEAD
import Testimonials from "./Testimonials/Testimonials";
=======
import Testimonials from "./Home/Testimonials";
import Reviews from "./Reviews/Reviews";
>>>>>>> 5eaea1cf95babba72de21262381d52d8d484dc2e
import Video from "./Video";

const Home = () => {
  return (
    <>
      <Banner />
      <Poster />
      <AboutClient />
      <Parallax />
      <Reviews/>
      {/* <Testimonials/> */}
      <Testimonials/>
    </>
  );
};

export default Home;
