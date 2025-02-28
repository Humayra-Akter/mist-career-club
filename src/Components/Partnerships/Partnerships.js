import React from "react";
import ahar from "../../assets/partnership/Ahar/ahar_logo.png";
import datacomp from "../../assets/partnership/DataCamp/DC_Donates_logo_inverted.png";
import bat from "../../assets/partnership/bat/bat.png";
import sheStem from "../../assets/partnership/sheStem/sheStem.png";
import singer from "../../assets/partnership/singer/singer.png";
import uniliver from "../../assets/partnership/uniliver/uniliver.png";
import ParticlesContainer from "../Team/ParticlesContainer";

const partners = [
  { title: "Ahar", img: ahar, color: "#0D3B66" },
  { title: "DataCamp", img: datacomp, color: "#1E4D92" },
  { title: "BAT", img: bat, color: "#2563EB" },
  { title: "SheStem", img: sheStem, color: "#3B82F6" },
  { title: "Singer", img: singer, color: "#60A5FA" },
  { title: "Unilever", img: uniliver, color: "#1E40AF" },
];

const Partnerships = () => {
  return (
    <div className="relative bg-gray-900 min-h-screen text-white overflow-hidden">
      {/* Particle Background */}
      <ParticlesContainer />

      {/* Hero Section */}
      <section className="text-center py-24 px-6 relative z-10">
        <h1 className="text-5xl font-bold tracking-wide animate-fade-in">
          Our Valued Partnerships
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-300">
          Collaborating with industry leaders to drive innovation, foster growth, and create impactful solutions together.
        </p>
      </section>

      {/* Partners Showcase */}
      <div className="relative w-full py-12 bg-gray-800 z-10">
        <h2 className="text-center text-4xl font-semibold mb-12 text-white">
          Meet Our Partners
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 mx-auto lg:max-w-6xl">
          {partners?.map((partner, index) => (
            <div
              key={index}
              className="relative lg:w-80 lg:h-40 mx-4 p-8 flex-shrink-0 rounded-lg shadow- bg-white/20 transition-transform transform hover:scale-105"
            >
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 p-6 animate-pulse text-white shadow-md">
                <img
                  src={partner.img}
                  alt={partner.title}
                  className="object-contain"
                />
              </div>
              <h2 className="mt-16 text-center text-2xl font-semibold text-white">
                {partner.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center bg-gradient-to-r from-blue-600 to-blue-900 z-10 relative">
        <h2 className="text-4xl font-bold">Want to Partner With Us?</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-100">
          Join our growing network of forward-thinking companies and
          organizations. Let’s build something amazing together!
        </p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 transition">
          Become a Partner
        </button>
      </div>
    </div>
  );
};

export default Partnerships;
