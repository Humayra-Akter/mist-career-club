import React from "react";

const HomeEvents = () => {
  const events = [
    {
      id: 1,
      title: "Leadership Workshop 2024",
      date: "January 12, 2024",
      description:
        "Develop essential leadership skills through this interactive workshop led by industry experts.",
      cta: "Register Now",
      link: "#",
    },
    {
      id: 2,
      title: "Annual Career Fair",
      date: "February 8, 2024",
      description:
        "Meet top employers, explore career opportunities, and attend on-spot interviews.",
      cta: "Learn More",
      link: "#",
    },
    {
      id: 3,
      title: "Alumni Networking Night",
      date: "March 22, 2024",
      description:
        "Reconnect with alumni and build professional networks at this exclusive evening event.",
      cta: "Join Us",
      link: "#",
    },
  ];

  return (
    <div className="p-8 bg-primary rounded-lg shadow-lg">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-secondary ">
          Upcoming Club Events
        </h1>
        <p className="text-gray-700 ">
          Stay involved with our exciting lineup of club activities!
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative bg-accent  rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Hover Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 hover:opacity-25 transition-opacity duration-300"></div>

            {/* Event Details */}
            <div className="p-6 relative z-10">
              <h2 className="text-xl font-bold text-secondary  mb-2">
                {event.title}
              </h2>
              <p className="text-sm text-gray-700 ">
                {event.date}
              </p>
              <p className="mt-4 text-gray-800 ">
                {event.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="p-6 relative z-10">
              <a
                href={event.link}
                className="inline-block bg-primary  text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {event.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeEvents;
