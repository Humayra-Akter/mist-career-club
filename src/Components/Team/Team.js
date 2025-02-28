import React, { useState } from "react";
import { motion } from "framer-motion";

const dummyData = {
  2025: {
    president: {
      name: "John Doe",
      position: "President",
      department: "CSE",
      image: "https://via.placeholder.com/150",
    },
    generalSecretary: {
      name: "Jane Smith",
      position: "General Secretary",
      department: "EEE",
      image: "https://via.placeholder.com/150",
    },
    directors: [
      {
        name: "Alice Brown",
        position: "Event Management",
        department: "BBA",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Bob White",
        position: "Communication",
        department: "ME",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Charlie Green",
        position: "Brand Promotion",
        department: "CE",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "David Blue",
        position: "Logistics",
        department: "EEE",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Eve Yellow",
        position: "Creative Design",
        department: "Arch",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Frank Red",
        position: "Workshop Management",
        department: "IPE",
        image: "https://via.placeholder.com/100",
      },
    ],
  },
};

const Team = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const panel = dummyData[selectedYear];

  return (
    <div className="flex flex-col items-center w-full p-4 relative">
      {/* Filter Options for Smaller Screens */}
      <div className="w-full flex justify-center sm:hidden mb-4">
        {[2025, 2024, 2023].map((year) => (
          <motion.div
            key={year}
            whileHover={{ scale: 1.1 }}
            className={`cursor-pointer px-4 py-2 mx-2 bg-gray-800 text-white rounded-lg shadow-lg ${
              selectedYear === year ? "bg-gray-600" : ""
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </motion.div>
        ))}
      </div>

      {/* Sidebar for Larger Screens */}
      <div className="hidden sm:flex fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-10">
        {[2025, 2024, 2023].map((year) => (
          <motion.div
            key={year}
            whileHover={{ scale: 1.1 }}
            className={`cursor-pointer p-2 ${
              selectedYear === year ? "bg-gray-600" : ""
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </motion.div>
        ))}
      </div>

      {/* Panel Display */}
      <div className="flex flex-col items-center w-full justify-center gap-6 mt-10 sm:mt-0">
        {/* President & General Secretary */}
        <div className="flex flex-col sm:flex-row gap-6">
          {[panel.president, panel.generalSecretary].map((leader, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative w-60 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                {leader.position}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white p-4"
              >
                <p className="text-lg font-bold">{leader.name}</p>
                <p>{leader.position}</p>
                <p>{leader.department}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Directors */}
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
          {panel.directors.map((director, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                {director.position}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white p-4"
              >
                <p className="text-lg font-bold">{director.name}</p>
                <p>{director.position}</p>
                <p>{director.department}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
