import React from "react";
import { FaLink } from "react-icons/fa";
import banner from "../../assets/images/banner/banner.jpg";
import event from "../../assets/images/banner/jobFairCover2025.png";

const HomeEvents = () => {
  return (
    <div>
      <h2 className="mt-20 text-3xl text-blue-800 lg:text-4xl text-center mb-12 animate-fade-in">
        Upcoming Event
      </h2>

      <div className="relative text-white py-16 px-4 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

        {/* Centered Image with hover effect */}
        <div className="relative z-20 flex justify-center items-center">
          <a
            href="https://www.facebook.com/share/16ygh6eWpP/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Gradient Border Wrapper */}
            <div className="p-[4px] bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 rounded-lg animate-gradient-slow bg-[length:200%_200%] bg-[position:0%_50%] w-full md:w-3/4 lg:w-1/2 mx-auto">
              {/* Image */}
              <img
                src={event}
                alt="Event Banner"
                className="rounded-lg shadow-lg transition duration-300 w-full group-hover:blur-sm"
              />
            </div>

            {/* Hover Icon */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FaLink className="text-white text-4xl bg-black bg-opacity-60 rounded-full p-3" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeEvents;
