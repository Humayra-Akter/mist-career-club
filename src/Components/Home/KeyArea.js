import React from "react";

const KeyArea = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Key Areas MCC Covers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Study Abroad Opportunities */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-center lg:text-left font-semibold text-blue-700 mb-4">
              Study Abroad Opportunities
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                Study Abroad sessions with industry experts and academic
                consultants.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                Guidance on master's programs, PhD opportunities, and
                professional scholarships abroad.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                Collaboration with organizations to provide insights into global
                education systems.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                Support for students aspiring to achieve academic and
                professional goals internationally.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                Encouragement for quality participation in global higher
                education initiatives.
              </li>
            </ul>
          </div>

          {/* Networking Events */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-center lg:text-left font-semibold text-blue-700 mb-4">
              Networking Events
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                Singer Bangladesh Limited flagship internship program named{" "}
                <span className="text-blue-600"> FreshStart</span>.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                Higher Studies on Abroad with AECC.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">✔</span>
                The Trinomial Podcast.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyArea;
