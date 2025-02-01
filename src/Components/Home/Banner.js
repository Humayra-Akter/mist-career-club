// import React from "react";
// import banner from "../../assets/images/banner/banner.jpg";

// const Banner = () => {
//   return (
//     <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden text-white">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `url(${banner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
//         {/* Headline */}
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
//           Empowering Your Future!
//         </h1>

//         {/* Subtext */}
//         <p className="text-lg md:text-2xl mb-8 animate__animated animate__fadeInUp">
//           Building pathways to your career success.
//         </p>

//         {/* Call-to-Action Buttons */}
//         <div className="flex space-x-4">
//           <a
//             href="#join-us"
//             className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-lg font-semibold rounded-full transition-all transform hover:scale-105"
//           >
//             Join Us
//           </a>
//           <a
//             href="#explore"
//             className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-lg font-semibold rounded-full transition-all transform hover:scale-105"
//           >
//             Explore Opportunities
//           </a>
//         </div>
//       </div>

//       {/* CSS for Bubbles and Animations */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//           @keyframes fadeInDown {
//             from {
//               transform: translateY(-20px);
//               opacity: 0;
//             }
//             to {
//               transform: translateY(0);
//               opacity: 1;
//             }
//           }
//           @keyframes fadeInUp {
//             from {
//               transform: translateY(20px);
//               opacity: 0;
//             }
//             to {
//               transform: translateY(0);
//               opacity: 1;
//             }
//           }


         
//           /* Responsive Adjustments */
//           @media (max-width: 768px) {
//             .text-4xl {
//               font-size: 2rem;
//             }
//             .text-lg {
//               font-size: 1rem;
//             }
//             .bubble {
//               width: 40px;
//               height: 40px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };
// export default Banner;


import React from "react";
import { motion } from "framer-motion";
import banner from "../../assets/images/banner/banner.jpg";

const Banner = () => {
  return (
    <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Image with Subtle Motion */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      ></motion.div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      {/* Content with Smooth Fade Animation */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Glassmorphic Effect for Content Box */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg">
          {/* Headline */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Your Future!
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-md md:text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Building pathways to your career success.
          </motion.p>

          {/* Call-to-Action Buttons with Soft Glow */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a
              href="#join-us"
              className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Join Us
            </a>
            <a
              href="#explore"
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Opportunities
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
