import ahar from "../../assets/partnership/Ahar/ahar_logo.png";
import datacomp from "../../assets/partnership/DataCamp/DC_Donates_logo_inverted.png";
import bat from "../../assets/partnership/bat/bat.png";
import sheStem from "../../assets/partnership/sheStem/sheStem.png";
import singer from "../../assets/partnership/singer/singer.png";
import uniliver from "../../assets/partnership/uniliver/uniliver.png";

import React from "react";

const Partners = () => {
const partners = [
  { title: "Ahar", img: ahar, color: "#0D3B66" }, // Dark Blue
  { title: "DataComp", img: datacomp, color: "#12406b" }, // Medium Blue
  // { title: "BAT", img: bat, color: "#1a3c5c" }, // Bright Blue
  { title: "SheStem", img: sheStem, color: "#22507a" }, // Sky Blue
  // { title: "Singer", img: singer, color: "#2d679c" }, // Light Blue
  // { title: "Unilever", img: uniliver, color: "#32618c" }, // Deep Indigo
];


  const isSmallScreen = window.innerWidth < 768;

  return (
    <div className="bg-gray-50 text-gray-800 font-sans py-12 overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Core partners
      </h1>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex items-center gap-8 ${
            isSmallScreen ? "flex-wrap justify-center" : "animate-scroll"
          }`}
          style={
            !isSmallScreen
              ? {
                  minWidth: "100%",
                  animationDuration: `${partners.length * 5}s`,
                }
              : {}
          }
        >
          {partners
            .concat(!isSmallScreen ? partners : [])
            .map((partner, index) => (
              <div
                key={index}
                className="relative w-80 h-36 p-8 flex-shrink-0 rounded-lg shadow-lg"
                style={{ backgroundColor: partner.color }}
              >
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 p-6 animate-pulse  text-white shadow-md">
                  <img src={partner?.img} />
                </div>
                <div className="mt-16 text-center">
                  <h2 className="text-2xl font-semibold mb-2 text-white">
                    {partner.title}
                  </h2>
                  <p className="text-white">{partner.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
