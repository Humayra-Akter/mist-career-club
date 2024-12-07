import React, { useState } from "react";

const HomeAbout = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why was MIST Career Club established?",
      answer:
        "MIST Career Club was founded to bridge the gap between academic knowledge and industry practices, equipping students with essential career skills.",
    },
    {
      question: "Why join MIST Career Club?",
      answer:
        "By joining, members gain access to exclusive events, mentorship programs, and valuable networking opportunities with industry leaders.",
    },
    {
      question: "What does MIST Career Club do?",
      answer:
        "MIST Career Club does not only create ample inter-personal skill nourishment opportunities,  but also works to establish a mutual collaborative relation for a longer term, with the ultimate goal of bridging the skills gap between campus and professional life.",
    },
  ];

  return (
    <div>
      {/* Section Heading */}
      <div className="text-center mt-10 -mb-10">
        <h1 className="text-3xl font-bold text-blue-800">
          MIST Career Club
        </h1>
      </div>

      <div className="lg:px-36 px-10 py-10 space-y-6 lg:grid lg:grid-cols-2 gap-10">
        {/* Description */}
        <p className="text-lg text-justify mt-10">
          The MIST Career Club is one of the premier student organizations at
          Military Institute of Science and Technology, empowering students with
          professional skills, mentorship opportunities, and real-world exposure
          since its establishment in 2017. With a mission to foster career
          excellence, the club has grown to become a hub for innovation and
          collaboration.
        </p>

        {/* Accordion Section */}
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 "
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left font-medium"
                onClick={() => toggle(index)}
              >
                <span className="text-blue-800">
                  {faq.question}
                </span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && <p className="p-4">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
