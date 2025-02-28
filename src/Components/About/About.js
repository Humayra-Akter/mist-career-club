// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";

// import img1 from "../../assets/2016/1.jpg";
// import img2 from "../../assets/2016/2.jpg";
// import img3 from "../../assets/2016/3.jpg";
// import img4 from "../../assets/2016/4.jpg";
// import img5 from "../../assets/2016/5.jpg";
// import img6 from "../../assets/2016/6.jpg";
// import img7 from "../../assets/2016/7.jpg";
// import img8 from "../../assets/2016/8.jpg";
// import img9 from "../../assets/2016/9.jpg";
// import img10 from "../../assets/2016/10.jpg";
// import img11 from "../../assets/2016/11.jpg";
// import img12 from "../../assets/2016/12.jpg";
// import img13 from "../../assets/2016/13.jpg";

// const sections = [
//   {
//     text: "The journey of <span class='font-bold text-blue-600'>MIST Career Club (MCC)</span> began in 2016 with a vision to bridge the gap between academic learning and professional success. As the only club directly authorized by the <span class='font-semibold'>Directorate of Students’ Welfare (DSW)</span>, MCC has been committed to empowering students with essential career guidance, leadership skills, and professional development opportunities.",
//     images: [img1, img2, img3],
//     align: "left",
//   },
//   {
//     text: "From its inception, MCC has been dedicated to enhancing students’ career readiness by organizing <span class='font-medium text-blue-600'>workshops, seminars, and leadership development programs</span>. These initiatives aim to equip students with job-related skills, industry insights, and networking opportunities to help them excel in their careers.",
//     images: [img4, img5, img6],
//     align: "right",
//   },
//   {
//     text: "Understanding the aspirations of students beyond national borders, MCC also arranges <span class='font-medium text-blue-600'>study abroad sessions</span>, providing valuable guidance on higher studies, scholarships, and international career pathways.",
//     images: [img7, img8, img9],
//     align: "left",
//   },
//   {
//     text: "Over the years, MCC has successfully hosted numerous flagship events, competitions, and training programs, continuously adapting to the evolving job market. With a relentless commitment to student success, <span class='font-semibold text-blue-600'>MIST Career Club</span> remains devoted to guiding future leaders and ensuring they are well-prepared for their professional journeys.",
//     images: [img10, img11, img12, img13],
//     align: "right",
//   },
// ];

// const About = () => {
//   return (
//     <div className="flex flex-col justify-center items-center bg-gray-100 px-6 py-10">
//       <div className="max-w-5xl bg-white shadow-lg rounded-lg p-6 md:p-8 w-full">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 text-center">
//           History of MIST Career Club (MCC)
//         </h1>
//         {sections?.map((section, index) => (
//           <div
//             key={index}
//             className={`flex flex-col ${
//               section.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
//             } items-center my-6 gap-6 w-full`}
//           >
//             {/* Text Section */}
//             <div className="md:w-2/3 w-full text-gray-700 text-lg text-justify leading-relaxed">
//               <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
//             </div>

//             {/* Image Carousel */}
//             <div className="md:w-1/3 w-full">
//               <Swiper
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 2500, disableOnInteraction: false }}
//                 modules={[Pagination, Autoplay]}
//                 className="w-full rounded-lg overflow-hidden shadow-md"
//               >
//                 {section.images.map((img, i) => (
//                   <SwiperSlide key={i}>
//                     <img
//                       src={img}
//                       alt={`MCC Event ${i + 1}`}
//                       className="w-full h-60 object-cover rounded-lg"
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import img1 from "../../assets/2016/1.jpg";
import img2 from "../../assets/2016/2.jpg";
import img3 from "../../assets/2016/3.jpg";
import img4 from "../../assets/2016/4.jpg";
import img5 from "../../assets/2016/5.jpg";
import img6 from "../../assets/2016/6.jpg";
import img7 from "../../assets/2016/7.jpg";
import img8 from "../../assets/2016/8.jpg";
import img9 from "../../assets/2016/9.jpg";
import img10 from "../../assets/2016/10.jpg";
import img11 from "../../assets/2016/11.jpg";
import img12 from "../../assets/2016/12.jpg";
import img13 from "../../assets/2016/13.jpg";

const sections = [
  {
    text: "The journey of <span class='font-bold text-blue-600'>MIST Career Club (MCC)</span> began in 2016 with a vision to bridge the gap between academic learning and professional success. As the only club directly authorized by the <span class='font-semibold'>Directorate of Students’ Welfare (DSW)</span>, MCC has been committed to empowering students with essential career guidance, leadership skills, and professional development opportunities.",
    images: [img1, img2, img3],
    align: "left",
  },
  {
    text: "From its inception, MCC has been dedicated to enhancing students’ career readiness by organizing <span class='font-medium text-blue-600'>workshops, seminars, and leadership development programs</span>. These initiatives aim to equip students with job-related skills, industry insights, and networking opportunities to help them excel in their careers.",
    images: [img4, img5, img6],
    align: "right",
  },
  {
    text: "Understanding the aspirations of students beyond national borders, MCC also arranges <span class='font-medium text-blue-600'>study abroad sessions</span>, providing valuable guidance on higher studies, scholarships, and international career pathways.",
    images: [img7, img8, img9],
    align: "left",
  },
  {
    text: "Over the years, MCC has successfully hosted numerous flagship events, competitions, and training programs, continuously adapting to the evolving job market. With a relentless commitment to student success, <span class='font-semibold text-blue-600'>MIST Career Club</span> remains devoted to guiding future leaders and ensuring they are well-prepared for their professional journeys.",
    images: [img10, img11, img12, img13],
    align: "right",
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900  flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:p-12 w-full  border-blue-300 mx-auto max-w-5xl bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20 my-8"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-blue-50 drop-shadow-lg text-center">
          History of <span className="text-blue-600">MIST Career Club</span>
        </h1>
        {/* <div className="h-1 w-24 bg-blue-600 mx-auto my-4 rounded-full"></div> */}
        {sections?.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: section.align === "right" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={` flex flex-col ${
              section.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center my-8 gap-8 w-full`}
          >
            {/* Text Section */}
            <div className="md:w-2/3 w-full text-gray-800 text-lg text-justify leading-relaxed font-medium px-4 py-6 bg-white/70 backdrop-blur-md rounded-lg shadow-md border-l-4 border-blue-500">
              <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
            </div>

            {/* Image Carousel */}
            <div className="md:w-1/3 w-full">
              <Swiper
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="w-full rounded-xl overflow-hidden shadow-lg border border-blue-300"
              >
                {section.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <motion.img
                      src={img}
                      alt={`MCC Event ${i + 1}`}
                      className="w-full h-64 object-cover rounded-xl border border-gray-200 hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
