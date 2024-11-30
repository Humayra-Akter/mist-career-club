import React, { useContext } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

const SharedHeader = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-primary">
        {/* Contact Info */}
        <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
          <div className="flex items-center gap-2 group text-secondary hover:text-accent">
            <FaPhoneAlt className="transition-transform group-hover:scale-125 animate-pulse" />
            <span className="transition-colors text-accent">
              +880 1627 363283
            </span>
          </div>
          <div className="flex items-center gap-2 group text-secondary hover:text-accent">
            <FaEnvelope className="transition-transform group-hover:scale-125 animate-pulse" />
            <span className="transition-colors text-accent">
              mistcareerclub.mist@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2 group text-secondary hover:text-accent">
            <FaMapMarkerAlt className="transition-transform animate-pulse group-hover:scale-125" />
            <span className="transition-colors text-accent ">inCampus</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-2 lg:mt-0 flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <a
            href="https://www.facebook.com/mistcareerclub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group text-secondary hover:text-accent"
          >
            <FaFacebook className="transition-transform animate-pulse group-hover:scale-125" />
            <span className="transition-colors text-accent">Facebook</span>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SharedHeader;
