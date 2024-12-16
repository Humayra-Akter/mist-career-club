import React from "react";

const KeyArea = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Key Areas MCC Covers
      </h2>

      {/* Study Abroad Opportunities Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">
          Study Abroad Opportunities
        </h3>
        <ul className="list-disc pl-6">
          <li>
            Study Abroad sessions with industry experts and academic
            consultants.
          </li>
          <li>
            Guidance on master's programs, PhD opportunities, and professional
            scholarships abroad.
          </li>
          <li>
            Collaboration with organizations to provide insights into global
            education systems.
          </li>
          <li>
            Support for students aspiring to achieve academic and professional
            goals internationally.
          </li>
          <li>
            Encouragement for quality participation in global higher education
            initiatives.
          </li>
        </ul>
      </div>

      {/* Networking Events Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-700">
          Networking Events
        </h3>
        <ul className="list-disc pl-6">
          <li>
            Singer Bangladesh Limited flagship internship program named{" "}
            <strong>FreshStart</strong>.
          </li>
          <li>Higher Studies on Abroad with AECC.</li>
          <li>
            <strong>The Trinomial Podcast</strong>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyArea;
