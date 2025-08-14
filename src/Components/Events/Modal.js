import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Modern close icon
import events from "../../data/events.json";

const Modal = ({ event, onClose }) => {
  const eventDetails = events[event.year]?.find(
    (item) => item.name === event.name
  );

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-full transition"
              onClick={onClose}
            >
              <X size={20} className="text-gray-800 dark:text-white" />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-gray-300 dark:border-gray-700">
              <h2 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
                {event?.name}
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 mt-2 max-h-[75vh] overflow-y-auto">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
                {eventDetails?.description || "Details coming soon."}
              </p>

              {/* Image Gallery */}
              {eventDetails?.images?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {eventDetails?.images?.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={image}
                        alt={`Image ${index + 1} of ${event.name}`}
                        className="w-full h-auto rounded-lg object-cover transition-all duration-300 hover:shadow-lg"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
