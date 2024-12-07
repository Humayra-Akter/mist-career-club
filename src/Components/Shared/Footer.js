import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/dark-logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-accent">
      <div className="footer p-3 lg:py-5 lg:px-16 bg-neutral text-neutral-content lg:grid lg:grid-cols-2">
        <aside className="items-center justify-center flex">
          <img src={logo} className="w-28 h-28" alt="Logo" />
        </aside>
        <nav>
          <p className="hover:text-gray-300 transition-colors text-accent">
            Contact: +880 1627 363283
            <br />
            Email:{" "}
            <a
              href="mailto:humayraakter25@gmail.com"
              className="hover:text-gray-300 text-accent transition-colors"
            >
              mistcareerclub.mist@gmail.com
            </a>
          </p>
          <h6 className="text-accent mb-4">Social</h6>
          <div className="flex flex-wrap gap-4">
            {[
              {
                link: "https://www.facebook.com/mistcareerclub",
                icon: <FaFacebook />,
              },
              {
                link: "https://www.linkedin.com/company/mist-career-club/",
                icon: <FaLinkedin />,
              },
            ].map((social, index) => (
              <Link
                to={social.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-2xl transform transition-transform duration-500"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="mt-2 border-t border-gray-700 py-3 text-center">
        <p>Copyright 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
