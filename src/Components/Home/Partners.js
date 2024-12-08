import React from "react";
import ahar from "../../assets/partnership/Ahar/ahar_logo.png";
import datacomp from "../../assets/partnership/DataCamp Donates/DC_Donates_logo_inverted.png";

const Partners = () => {
  const partners = [
    {
      title: "Ahar",
      img: ahar,
      color: "#102A43",
    },
    {
      title: "DataComp",
      img: datacomp,
      color: "#1D3A5F",
    },
  ];

  const isSmallScreen = window.innerWidth < 768;

  return (
    <div className="bg-gray-50 text-gray-800 font-sans py-12 overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Partners
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
                className="relative w-80 h-40 p-8 flex-shrink-0 rounded-lg shadow-lg"
                style={{ backgroundColor: partner?.color }}
              >
                <div className="flex items-center justify-center p-6 animate-pulse text-white">
                  <img className="w-2/3 h-2/3" src={partner?.img} />
                </div>
               
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
