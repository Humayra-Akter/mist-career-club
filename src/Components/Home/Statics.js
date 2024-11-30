import React from "react";
import {
  FaProjectDiagram,
  FaUsers,
  FaUserShield,
  FaRedoAlt,
  FaThumbsUp,
} from "react-icons/fa";
import CountUp from "react-countup";

const Statics = () => {
  const stats = [
    {
      end: 200,
      suffix: "+",
      label: "Events Hosted",
      icon: <FaProjectDiagram />,
    },
    { end: 50, suffix: "+", label: "Partnerships", icon: <FaUsers /> },
    {
      end: 5000,
      suffix: "+",
      label: "Active Members",
      icon: <FaUserShield />,
    },
    {
      end: 95,
      suffix: "%",
      label: "Success Rate",
      icon: <FaThumbsUp />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-primary rounded-lg shadow-lg">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 bg-secondary rounded-lg text-center shadow-md flex flex-col items-center space-y-4"
        >
          <div className="text-4xl text-accent animate-bounce">
            {stat.icon}
          </div>
          <h1 className="text-3xl text-accent ">
            <CountUp
              start={0}
              end={stat.end}
              duration={2.5}
              suffix={stat.suffix}
            />
          </h1>
          <p className="text-base text-gray-200 font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statics;
