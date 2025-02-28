import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

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
    <div className="flex flex-col justify-center items-center bg-gray-100 px-6 py-10">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-6 md:p-8 w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 text-center">
          History of MIST Career Club (MCC)
        </h1>
        {sections?.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              section.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center my-6 gap-6 w-full`}
          >
            {/* Text Section */}
            <div className="md:w-2/3 w-full text-gray-700 text-lg text-justify leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
            </div>

            {/* Image Carousel */}
            <div className="md:w-1/3 w-full">
              <Swiper
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="w-full rounded-lg overflow-hidden shadow-md"
              >
                {section.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`MCC Event ${i + 1}`}
                      className="w-full h-60 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
