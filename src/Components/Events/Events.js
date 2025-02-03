import React, { useState } from "react";
import { motion } from "framer-motion";
import img221 from "../../assets/2022/careerOnPoint2/1.jpg";
import img222 from "../../assets/2022/catchTheHour/1.jpg";
import img223 from "../../assets/2022/MISTJobFair2022/1.jpg";
import img224 from "../../assets/2022/roadToyourdreamSurvey/1.jpg";
import img225 from "../../assets/2022/studyAbroad/1.jpg";
import img231 from "../../assets/2023/campusToCorporatebyBAT/1.jpg";
import img232 from "../../assets/2023/careerGrowthAccelarator/1.jpg";
import img233 from "../../assets/2023/HSBCWorkplacementSeminar/1.jpg";
import img234 from "../../assets/2023/MISTCampusTownhallGPacademy/1.jpg";
import img241 from "../../assets/2024/catchTheHour2/1.jpg";
import img242 from "../../assets/2024/riseAboveAll/1.png";
import Modal from "./Modal";

const eventData = {
  2022: [
    { name: "Career On Point 2", image: img221, year: 2022 },
    { name: "Catch The Hour", image: img222, year: 2022 },
    { name: "MIST Job Fair 2022", image: img223, year: 2022 },
    { name: "Road to Your Dream Survey", image: img224, year: 2022 },
    { name: "Study Abroad", image: img225, year: 2022 },
  ],
  2023: [
    { name: "Campus to Corporate by BAT", image: img231, year: 2023 },
    { name: "Career Growth Accelerator", image: img232, year: 2023 },
    { name: "HSBC Work Placement Seminar", image: img233, year: 2023 },
    { name: "MIST Campus Townhall GP Academy", image: img234, year: 2023 },
  ],
  2024: [
    { name: "Catch The Hour 2", image: img241, year: 2024 },
    { name: "Rise Above All", image: img242, year: 2024 },
  ],
};

const Events = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Flattened event list
  const allEvents = Object.entries(eventData).flatMap(([year, events]) =>
    events.map((event) => ({
      ...event,
      year,
    }))
  );

  // Filtered events based on selected year
  const filteredEvents =
    selectedYear === "all"
      ? allEvents
      : allEvents.filter((event) => event.year === selectedYear);

  return (
    <div className="p-6 min-h-screen">
      {/* Year Selection Menu */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedYear === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
          onClick={() => setSelectedYear("all")}
        >
          All Events
        </button>
        {Object.keys(eventData).map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedYear === year
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Event Cards with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-cover bg-center rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300"
            style={{ backgroundImage: `url(${event.image})`, height: "220px" }}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity hover:bg-opacity-40">
              <span className="text-white font-semibold text-lg">
                {event.name}
              </span>
            </div>
            <span className="absolute bottom-2 right-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
              {event.year}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedEvent && (
        <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default Events;
