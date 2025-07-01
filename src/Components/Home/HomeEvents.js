import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import banner from "../../assets/images/banner/banner.jpg";
import event from "../../assets/images/banner/jobFairCover2025.png";

import organizer1 from "../../assets/jobFairOrganizer/1.png";
import organizer2 from "../../assets/jobFairOrganizer/2.png";
import organizer3 from "../../assets/jobFairOrganizer/3.png";
import organizer4 from "../../assets/jobFairOrganizer/4.png";
import organizer5 from "../../assets/jobFairOrganizer/5.png";
import organizer6 from "../../assets/jobFairOrganizer/6.png";
import organizer7 from "../../assets/jobFairOrganizer/7.png";
import organizer8 from "../../assets/jobFairOrganizer/8.png";
import ParticlesContainer from "../Team/ParticlesContainer";

const organizers = [
  { name: "Maisha Tabassum", img: organizer1 },
  { name: "Humayra Akter", img: organizer2 },
  { name: "Anik Dev Argho", img: organizer3 },
  { name: "Fardin Islam Mahin", img: organizer4 },
  { name: "Istiaque Ibn Zahid", img: organizer5 },
  { name: "Hafiz Ul Alam", img: organizer6 },
  { name: "Redwan Ahamed Tamim", img: organizer7 },
  { name: "Abdullah Al Rafi", img: organizer8 },
];

const HomeEvents = () => {
  const [showModal, setShowModal] = useState(false);

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
        <div className="relative z-20 flex flex-col items-center">
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

          {/* Button to open modal */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
          >
            See Core Organizers
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60 px-4">
          <div className="bg-gray-900 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-5xl max-h-[85vh] overflow-y-auto p-8 relative border border-white/30">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl font-bold transition"
              title="Close"
            >
              ×
            </button>

            {/* Title */}
            <h3 className="text-3xl font-bold text-center text-white mb-6">
              Core Organizer Team
            </h3>

            {/* Grid of Organizers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              <ParticlesContainer />
              {organizers?.map((member, idx) => (
                <div
                  key={idx}
                  className=" flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-sm rounded-xl"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-52 h-52 rounded-md object-cover mb-1 shadow-md p-[3px]  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-slow bg-[length:200%_200%] bg-[position:0%_50%]"
                  />
                  <p className="text-md font-semibold text-white">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {/* {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[80vh] overflow-y-auto p-6 relative">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
              Core Organizer Team
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {organizers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover shadow-md mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default HomeEvents;
