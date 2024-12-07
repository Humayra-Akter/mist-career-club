// import React from "react";

// const Organogram = () => {
//   return (
//     <div className="bg-[#0D1B2A] text-white py-10 px-5 font-sans">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold">Organogram</h1>
//         <p className="text-lg my-2">
//           <strong>Chief Patron:</strong> Commandant, MIST
//         </p>
//         <p className="text-lg">
//           <strong>Chief Advisor and Club Counselor:</strong> Director, DSW, MIST
//         </p>
//       </div>

//       {/* Organizational Structure */}
//       <div className="flex flex-wrap justify-center mb-10 gap-4">
//         {[
//           "Moderator",
//           "President",
//           "General Secretary",
//           "Club Coordinator",
//         ].map((role) => (
//           <div
//             key={role}
//             className="bg-[#1E3A5F] text-center py-3 px-6 rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#27476E]"
//           >
//             {role}
//           </div>
//         ))}
//       </div>

//       {/* Directors Section */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {[
//           "Event Management",
//           "Communication",
//           "Brand Promotion",
//           "Logistics",
//           "Creative Design",
//           "Workshop Management",
//         ].map((category) => (
//           <div
//             key={category}
//             className="bg-[#1E3A5F] p-6 rounded-lg text-center w-48 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#27476E]"
//           >
//             <h3 className="text-lg mb-2">Director</h3>
//             <p className="font-bold mb-3">{category}</p>
//             <hr className="border-white mb-3" />
//             <p>Assistant Director</p>
//             <p>Executive</p>
//             <p>Associates</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Organogram;
import React from "react";

const Organogram = () => {
  return (
    <div className="bg-[#0D1B2A] text-white py-10 px-5 font-sans">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Organogram</h1>
        <p className="text-lg my-2">
          <strong>Chief Patron:</strong> Commandant of MIST Maj Gen Md Nasim
          Parvez, BSP, ndc, afwc, psc
        </p>
        <p className="text-lg">
          <strong>Chief Advisor and Club Counselor:</strong> Director, DSW, MIST
        </p>
      </div>

      {/* Core Team Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-6">Core Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Moderator",
            "President",
            "General Secretary",
            "Club Coordinator",
          ].map((role) => (
            <div
              key={role}
              className="bg-[#1E3A5F] text-center py-5 px-8 rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-[#27476E] shadow-lg"
            >
              <h3 className="text-xl font-bold">{role}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Directors Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Directors</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Event Management",
            "Communication",
            "Brand Promotion",
            "Logistics",
            "Creative Design",
            "Workshop Management",
          ].map((category) => (
            <div
              key={category}
              className="bg-[#1E3A5F] p-4 rounded-lg text-center w-48 items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-[#27476E]"
            >
              <h3 className="text-lg font-bold mb-2">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organogram;
