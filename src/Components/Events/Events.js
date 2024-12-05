import React, { useState } from "react";
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

const Modal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 w-4/5 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-auto rounded-md mb-4"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
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
    <div className="p-4">
      {/* Year Selection Menu */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            selectedYear === "all" ? "bg-primary font-bold" : "bg-gray-500"
          } hover:bg-secondary hover:text-black`}
          onClick={() => setSelectedYear("all")}
        >
          All Events
        </button>
        {Object.keys(eventData).map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedYear === year ? "bg-primary font-bold" : "bg-gray-500"
            } hover:bg-secondary`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-20 gap-4">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-lg h-40 cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 hover:ring-2 hover:ring-primary"
            style={{ backgroundImage: `url(${event.image})` }}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">{event.name}</span>
            </div>
            <span className="text-white p-10 font-bold text-lg">{event.year}</span>
          </div>
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
