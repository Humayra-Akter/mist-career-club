import React from "react";
import Banner from "./Banner";
import HomeAbout from "./HomeAbout";
import HomeEvents from "./HomeEvents";
import Organogram from "./Organogram";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeAbout />
      <Organogram />
      <HomeEvents />
    </div>
  );
};

export default Home;
