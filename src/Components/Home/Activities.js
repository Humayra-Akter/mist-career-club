import React from "react";
import {
  FaChalkboardTeacher,
  FaRoad,
  FaNetworkWired,
  FaUniversity,
  FaCertificate,
} from "react-icons/fa";

const Activities = () => {
  const activities = [
    {
      title: "Career Sessions",
      description: "Career sessions (online/offline).",
      icon: <FaChalkboardTeacher />,
      color: "#102A43",
    },
    {
      title: "Roadshows",
      description: "Roadshows with top companies.",
      icon: <FaRoad />,
      color: "#1D3A5F",
    },
    {
      title: "Networking Events",
      description:
        "Networking events with industry professionals and Study abroad seminar.",
      icon: <FaNetworkWired />,
      color: "#24476E",
    },
    {
      title: "Campus Engagement",
      description: "Campus Engagement Events, Case competitions, job fairs.",
      icon: <FaUniversity />,
      color: "#2E5A82",
    },
    {
      title: "Certification Courses",
      description: "Certification courses for skill enhancement.",
      icon: <FaCertificate />,
      color: "#3D6F97",
    },
  ];

  const isSmallScreen = window.innerWidth < 768; // Detect screen size (small screens < 768px)

  return (
    <div className="bg-gray-50 text-gray-800 font-sans py-12 overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Core Activities
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
                  animationDuration: `${activities.length * 5}s`,
                }
              : {}
          }
        >
          {activities
            .concat(!isSmallScreen ? activities : [])
            .map((activity, index) => (
              <div
                key={index}
                className="relative w-80 h-56 p-8 flex-shrink-0 rounded-lg shadow-lg"
                style={{ backgroundColor: activity.color }}
              >
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 p-6 animate-pulse  text-white rounded-full shadow-md">
                  <span className="text-3xl">{activity.icon}</span>
                </div>
                <div className="mt-16 text-center">
                  <h2 className="text-2xl font-semibold mb-2 text-white">
                    {activity.title}
                  </h2>
                  <p className="text-white">{activity.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
