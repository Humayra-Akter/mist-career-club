import React from "react";
import Banner from "./Banner";
import HomeAbout from "./HomeAbout";
import HomeEvents from "./HomeEvents";
import Organogram from "./Organogram";
import Activities from "./Activities";
import Partners from "./Partners";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeAbout />
      <div className="hidden lg:block">
        <Organogram />
      </div>
      <Activities />
      <HomeEvents />
      <Partners />
    </div>
  );
};

export default Home;
