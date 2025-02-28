import React, { useState, useEffect, useRef } from "react";
import { FaRocket } from "react-icons/fa";
import banner from "../../assets/images/banner/banner.jpg";

const HomeEvents = () => {
  const [rocketPosition, setRocketPosition] = useState(0);
  const timelineRef = useRef(null);
  const handleScroll = () => {
    if (timelineRef.current) {
      const { top, bottom, height } =
        timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (top < viewportHeight && bottom > 0) {
        const visiblePart = Math.min(viewportHeight - top, height);
        const scrolledRatio = visiblePart / height;
        setRocketPosition(scrolledRatio * height * 0.8);
      } else if (bottom <= 0) {
        setRocketPosition(height);
      } else {
        setRocketPosition(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const eventTimeline = [
    {
      description: "EngiBiz (Business Case Competition)",
      start: "1 Jan 25",
      end: "1 Mar 25",
    },
    {
      description: "Campus Hour -2",
      start: "13 Mar 25",
      end: "3 Mar 25",
    },
    {
      description: "MIST Job Fair 2025",
      start: "27 April 25",
      end: "29 April 25",
    },
  ];

  return (
    <div>
      <h2 className="mt-20 text-3xl text-blue-500 lg:text-4xl text-center mb-12 animate-fade-in">
        MCC Event Timeline
      </h2>

      <div
        ref={timelineRef}
        className="relative text-white py-16 px-4 lg:px-16 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            background: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Rocket Animation */}
        <div
          className="absolute left-1/2 top-0 z-10"
          style={{
            transform: `translate(-50%, ${rocketPosition}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <FaRocket className="text-5xl text-yellow-400" />
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gray-700 z-0" />

        <div className="relative mt-1 space-y-8">
          {eventTimeline.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >
              <div
                className={`relative bg-gray-800 rounded-lg shadow-lg p-6 lg:p-8 w-full sm:w-3/4 lg:w-1/2 text-center transform transition duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-500 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <h3 className="text-xl lg:text-2xl text-secondary font-bold mb-4">
                  {event.description}
                </h3>
                <p className="text-sm lg:text-lg mb-4 text-gray-300">
                  {event.start} - {event.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomeEvents;
