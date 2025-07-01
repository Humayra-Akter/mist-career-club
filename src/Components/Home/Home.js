import React from "react";
import Banner from "./Banner";
import HomeAbout from "./HomeAbout";
import HomeEvents from "./HomeEvents";
import Organogram from "./Organogram";
import Activities from "./Activities";
import Partners from "./Partners";
import KeyArea from "./KeyArea";

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
      <KeyArea />
      <Partners />
    </div>
  );
};

export default Home;
