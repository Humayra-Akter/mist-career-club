import React from "react";
import events from "../../data/events.json";

const Modal = ({ event, onClose }) => {
  // Retrieve the full event details, including the `images` array
  const eventDetails = events[event.year]?.find(
    (item) => item.name === event.name
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-primary rounded-lg shadow-lg w-full max-w-4xl relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Header */}
        <div className="p-6 border-b border-secondary">
          <h2 className="text-2xl text-center text-accent font-bold">
            {event?.name}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 mt-2 max-h-[75vh] overflow-y-scroll">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {eventDetails?.images?.map((image, index) => (
              <div key={index} className="w-full h-auto">
                <img
                  src={image}
                  alt={`Image ${index + 1} of ${event.name}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
