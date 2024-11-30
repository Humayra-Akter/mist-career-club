import React from "react";
import Banner from "./Banner";
import Statics from "./Statics";
import HomeAbout from "./HomeAbout";
import HomeEvents from "./HomeEvents";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeAbout />

      <Statics />
      <HomeEvents />
    </div>
  );
};

export default Home;
