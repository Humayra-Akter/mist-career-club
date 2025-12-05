// import React from "react";
// import { motion } from "framer-motion";
// import ParticlesContainer from "./ParticlesContainer";

// import brandPromotorFall2024 from "../../assets/panel/brandPromotorFall2024.jpg";
// import brandPromotorSpring from "../../assets/panel/brandPromotorSpring.jpg";
// import brandPromotorFall2023 from "../../assets/panel/brandPromotorFall2023.jpg";
// import brandPromotorSpring2025 from "../../assets/panel/brandPromotorSpring2025.jpg";
// import clubCoordinatorFall2024 from "../../assets/panel/clubCoordinatorFall2024.jpg";
// import clubCoordinatorSpring from "../../assets/panel/clubCoordinatorSpring.jpg";
// import clubCoordinatorFall2023 from "../../assets/panel/clubCoordinatorFall2023.jpg";
// import clubCoordinatorSpring2025 from "../../assets/panel/clubCoordinatorSpring2025..jpg";
// import communicationFall2024 from "../../assets/panel/communicationFall2024.jpg";
// import communicationSpring from "../../assets/panel/communicationSpring.jpg";
// import communicationFall2023 from "../../assets/panel/communicationFall2023.jpg";
// import communicationSpring2025 from "../../assets/panel/communicationSpring2025.jpg";
// import creativeDesignFall2024 from "../../assets/panel/creativeDesignFall2024.jpg";
// import creativeDesignSpring from "../../assets/panel/creativeDesignSpring.jpg";
// import creativeDesignFall2023 from "../../assets/panel/creativeDesignFall2023.jpg";
// import creativeDesignSpring2025 from "../../assets/panel/creativeDesignSpring2025.jpg";
// import eventManagementFall2024 from "../../assets/panel/eventManagementFall2024.jpg";
// import eventManagementSpring from "../../assets/panel/eventManagementSpring.jpg";
// import eventManagementFall2023 from "../../assets/panel/eventManagementFall2023.jpg";
// import eventManagementSpring2025 from "../../assets/panel/eventManagementSpring2025.jpg";
// import generalSecretaryFall2024 from "../../assets/panel/generalSecretaryFall2024.jpg";
// import generalSecretarySpring from "../../assets/panel/generalSecretarySpring.jpg";
// import generalSecretaryFall2023 from "../../assets/panel/generalSecretaryFall2023.jpg";
// import generalSecretarySpring2025 from "../../assets/panel/generalSecretarySpring2025.jpg";
// import logisticFall2024 from "../../assets/panel/logisticFall2024.jpg";
// import logisticSpring from "../../assets/panel/logisticSpring.jpg";
// import logisticFall2023 from "../../assets/panel/logisticFall2023.jpg";
// import logisticSpring2025 from "../../assets/panel/logisticSpring2025.jpg";
// import presidentFall2024 from "../../assets/panel/presidentFall2024.jpg";
// import presidentSpring from "../../assets/panel/presidentSpring.jpg";
// import presidentFall2023 from "../../assets/panel/presidentFall2023.jpg";
// import presidentSpring2025 from "../../assets/panel/presidentSpring2025.jpg";
// import workshopManagementFall2024 from "../../assets/panel/workshopManagementFall2024.jpg";
// import workshopSpring from "../../assets/panel/workshopSpring.jpg";
// import workshopManagementFall2023 from "../../assets/panel/workshopManagementFall2023.jpg";
// import workshopSpring2025 from "../../assets/panel/workshopSpring2025.jpg";
// import digitalSolutionSpring2025 from "../../assets/panel/digitalSolutionSpring2025.jpg";

// const terms = [
//   {
//     term: "2025 Spring",
//     president: { name: "Md. Nazmul Hasan Nayeem", img: presidentSpring2025 },
//     generalSecretary: {
//       name: "Md. Zahid Adnan Fardin",
//       img: generalSecretarySpring2025,
//     },
//     clubCoordinator: {
//       name: "Md. Asiqur Rahman Asif",
//       img: clubCoordinatorSpring2025,
//     },
//     panel: [
//       {
//         position: "Digital Solution",
//         name: "Arif Abdullah",
//         img: digitalSolutionSpring2025,
//       },
//       {
//         position: "Brand Promotion",
//         name: "Fatema Tuz Zohora Mim",
//         img: brandPromotorSpring2025,
//       },
//       {
//         position: "Communication",
//         name: "Udoy Chandra Shil",
//         img: communicationSpring2025,
//       },
//       {
//         position: "Creative Design",
//         name: "Sadiya Tabassum",
//         img: creativeDesignSpring2025,
//       },
//       {
//         position: "Event Management",
//         name: "Ridoanul Islam Rony",
//         img: eventManagementSpring2025,
//       },
//       {
//         position: "Logistics",
//         name: "Md. Ashraful Islam Khan",
//         img: logisticSpring2025,
//       },
//       {
//         position: "Workshop Management",
//         name: "S M Mansib Azad",
//         img: workshopSpring2025,
//       },
//     ],
//   },
//   {
//     term: "2024 Fall",
//     president: { name: "Maisha Tabassum", img: presidentFall2024 },
//     generalSecretary: { name: "Anik Dev Argho", img: generalSecretaryFall2024 },
//     clubCoordinator: {
//       name: "Istiaque Ibn Zahid",
//       img: clubCoordinatorFall2024,
//     },
//     panel: [
//       {
//         position: "Brand Promotion",
//         name: "Puspita Khatun Papry",
//         img: brandPromotorFall2024,
//       },
//       {
//         position: "Communication",
//         name: "Abdullah Al Rafi",
//         img: communicationFall2024,
//       },
//       {
//         position: "Creative Design",
//         name: "Humayra Akter",
//         img: creativeDesignFall2024,
//       },
//       {
//         position: "Event Management",
//         name: "Saikat Islam Sagor",
//         img: eventManagementFall2024,
//       },
//       {
//         position: "Logistics",
//         name: "Redwan Ahmed Tamim",
//         img: logisticFall2024,
//       },
//       {
//         position: "Workshop Management",
//         name: "Farah Ismail",
//         img: workshopManagementFall2024,
//       },
//     ],
//   },
//   {
//     term: "2024 Spring",
//     president: { name: "Fardin Islam Mahin", img: presidentSpring },
//     generalSecretary: { name: "Anik Dev Argho", img: generalSecretarySpring },
//     clubCoordinator: { name: "Farah Ismail", img: clubCoordinatorSpring },
//     panel: [
//       {
//         position: "Brand Promotion",
//         name: "Chaity Fariha",
//         img: brandPromotorSpring,
//       },
//       {
//         position: "Communication",
//         name: "Maisha Tabassum",
//         img: communicationSpring,
//       },
//       {
//         position: "Creative Design",
//         name: "Shaishab Das",
//         img: creativeDesignSpring,
//       },
//       {
//         position: "Event Management",
//         name: "Istiaque Ibn Zahid",
//         img: eventManagementSpring,
//       },
//       { position: "Logistics", name: "Hafiz ul Alam", img: logisticSpring },
//       {
//         position: "Workshop Management",
//         name: "Saikat Islam Sagor",
//         img: workshopSpring,
//       },
//     ],
//   },
//   {
//     term: "2023 Fall",
//     president: { name: "Shoeb Parvez Shawon", img: presidentFall2023 },
//     generalSecretary: {
//       name: "Md Istiaque Ahammed Sakib",
//       img: generalSecretaryFall2023,
//     },
//     clubCoordinator: { name: "Maliha Zerin", img: clubCoordinatorFall2023 },
//     panel: [
//       {
//         position: "Brand Promotion",
//         name: "Ononya Shahjahan",
//         img: brandPromotorFall2023,
//       },
//       {
//         position: "Communication",
//         name: "Tanvir Ahamed Srijan",
//         img: communicationFall2023,
//       },
//       {
//         position: "Creative Design",
//         name: "Sadik Bin Ashraf",
//         img: creativeDesignFall2023,
//       },
//       {
//         position: "Event Management",
//         name: "Md Soad Solaiman",
//         img: eventManagementFall2023,
//       },
//       { position: "Logistics", name: "Mehrab Al Islam", img: logisticFall2023 },
//       {
//         position: "Workshop Management",
//         name: "Md Mahmud Shihab Mahin",
//         img: workshopManagementFall2023,
//       },
//     ],
//   },
// ];

// const Team = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12 overflow-hidden">
//       <ParticlesContainer />
//       <motion.h1
//         className="text-4xl font-bold text-center text-white mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Meet Our Team
//       </motion.h1>

//       {terms?.map((term, index) => (
//         <motion.div
//           key={index}
//           className="mx-auto max-w-6xl bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20 my-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold text-white text-center mb-8">
//             {term?.term} Term Panel
//           </h2>

//           <div className="flex justify-center gap-16 mb-10">
//             {[term.president, term.generalSecretary].map((person, i) => (
//               <motion.div
//                 key={i}
//                 className="text-center flex items-center flex-col"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <div className="relative w-36 h-36 rounded-full p-[4px] bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-slow bg-[length:200%_200%] bg-[position:0%_50%]">
//                   <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
//                     <img
//                       src={person.img}
//                       alt={person.name}
//                       className="w-36 h-36 object-cover rounded-full"
//                     />
//                   </div>
//                 </div>

//                 <p className="font-bold italic text-white mt-2 text-lg">
//                   {person.name}
//                 </p>
//                 <p className="text-gray-300">
//                   {i === 0 ? "President" : "General Secretary"}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex justify-center mb-8">
//             <motion.div
//               className="flex flex-col items-center text-center"
//               whileHover={{ scale: 1.1 }}
//             >
//               <div className="relative w-32 h-32 rounded-full p-[4px]  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-slow bg-[length:200%_200%] bg-[position:0%_50%]">
//                 <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
//                   <img
//                     src={term.clubCoordinator.img}
//                     alt={term.clubCoordinator.name}
//                     className="w-32 h-32 object-cover rounded-full"
//                   />
//                 </div>
//               </div>
//               <p className="font-bold italic text-white mt-2 text-lg">
//                 {term.clubCoordinator.name}
//               </p>
//               <p className="text-gray-300">Club Coordinator</p>
//             </motion.div>
//           </div>

//           <div
//             className={`grid grid-cols-2 md:grid-cols-3 ${
//               term.panel.length === 7 ? "lg:grid-cols-7" : "lg:grid-cols-6"
//             } gap-8`}
//           >
//             {term?.panel.map((member, i) => (
//               <motion.div
//                 key={i}
//                 className="text-center flex flex-col items-center"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <div className="relative w-32 h-32 rounded-full p-[4px] bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 animate-gradient-slow bg-[length:200%_200%] bg-[position:0%_50%]">
//                   <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
//                     <img
//                       src={member.img}
//                       alt={member.name}
//                       className="w-32 h-32 object-cover rounded-full"
//                     />
//                   </div>
//                 </div>

//                 <p className="font-semibold text-white italic mt-2 text-lg">
//                   {member.name}
//                 </p>
//                 <p className="text-gray-300 text-sm">{member.position}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Team;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesContainer from "./ParticlesContainer";
import { client, urlFor } from "../../sanityClient";

const Team = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "term"]`)
      .then((data) => {
        // ✅ PERFECT CLIENT-SIDE SORTING (NO GROQ FUNCTIONS)
        const sorted = data.sort((a, b) => {
          const [yearA, seasonA] = a.term.split(" ");
          const [yearB, seasonB] = b.term.split(" ");

          if (yearA !== yearB) {
            return Number(yearB) - Number(yearA); // Year DESC
          }

          const order = { Fall: 2, Spring: 1 };
          return order[seasonB] - order[seasonA]; // Fall before Spring
        });

        setTerms(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("SANITY FETCH ERROR:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center text-2xl mt-20">
        Loading team...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-xl mt-20">
        Failed to load data: {error}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12 overflow-hidden">
      <ParticlesContainer />

      <motion.h1
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Team
      </motion.h1>

      {terms.map((term) => (
        <motion.div
          key={term._id}
          className="mx-auto max-w-6xl bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20 my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {term.term} Term Panel
          </h2>

          {/* PRESIDENT + GENERAL SECRETARY */}
          <div className="flex justify-center gap-16 mb-10 flex-wrap">
            {[term.president, term.generalSecretary].map((person, i) => (
              <motion.div
                key={i}
                className="text-center flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={urlFor(person.image).width(400).height(400).url()}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold italic text-white mt-3 text-lg">
                  {person.name}
                </p>
                <p className="text-gray-300">
                  {i === 0 ? "President" : "General Secretary"}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CLUB COORDINATOR */}
          <div className="flex justify-center mb-10">
            <motion.div
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                <img
                  src={urlFor(term.clubCoordinator.image)
                    .width(400)
                    .height(400)
                    .url()}
                  alt={term.clubCoordinator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold italic text-white mt-3 text-lg">
                {term.clubCoordinator.name}
              </p>
              <p className="text-gray-300">Club Coordinator</p>
            </motion.div>
          </div>

          {/* PANEL MEMBERS */}
          <div className={`grid grid-cols-2 md:grid-cols-3 
            ${ term.panel.length === 7 ? "lg:grid-cols-7" : "lg:grid-cols-6" } gap-8`}>
            {term.panel.map((member) => (
              <motion.div
                key={member._key}
                className="text-center flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={urlFor(member.image).width(400).height(400).url()}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-semibold text-white italic mt-3 text-lg">
                  {member.name}
                </p>
                <p className="text-gray-300 text-sm">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Team;
