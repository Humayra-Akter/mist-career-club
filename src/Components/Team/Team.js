import React from "react";

import brandPromotorFall2024 from "../../assets/panel/brandPromotorFall2024.jpg";
import brandPromotorSpring from "../../assets/panel/brandPromotorSpring.jpg";
import brandPromotorFall2023 from "../../assets/panel/brandPromotorFall2023.jpg";
import clubCoordinatorFall2024 from "../../assets/panel/clubCoordinatorFall2024.jpg";
import clubCoordinatorSpring from "../../assets/panel/clubCoordinatorSpring.jpg";
import clubCoordinatorFall2023 from "../../assets/panel/clubCoordinatorFall2023.jpg";
import communicationFall2024 from "../../assets/panel/communicationFall2024.jpg";
import communicationSpring from "../../assets/panel/communicationSpring.jpg";
import communicationFall2023 from "../../assets/panel/communicationFall2023.jpg";
import creativeDesignFall2024 from "../../assets/panel/creativeDesignFall2024.jpg";
import creativeDesignSpring from "../../assets/panel/creativeDesignSpring.jpg";
import creativeDesignFall2023 from "../../assets/panel/creativeDesignFall2023.jpg";
import eventManagementFall2024 from "../../assets/panel/eventManagementFall2024.jpg";
import eventManagementSpring from "../../assets/panel/eventManagementSpring.jpg";
import eventManagementFall2023 from "../../assets/panel/eventManagementFall2023.jpg";
import generalSecretaryFall2024 from "../../assets/panel/generalSecretaryFall2024.jpg";
import generalSecretarySpring from "../../assets/panel/generalSecretarySpring.jpg";
import generalSecretaryFall2023 from "../../assets/panel/generalSecretaryFall2023.jpg";
import logisticFall2024 from "../../assets/panel/logisticFall2024.jpg";
import logisticSpring from "../../assets/panel/logisticSpring.jpg";
import logisticFall2023 from "../../assets/panel/logisticFall2023.jpg";
import presidentFall2024 from "../../assets/panel/presidentFall2024.jpg";
import presidentSpring from "../../assets/panel/presidentSpring.jpg";
import presidentFall2023 from "../../assets/panel/presidentFall2023.jpg";
import workshopManagementFall2024 from "../../assets/panel/workshopManagementFall2024.jpg";
import workshopSpring from "../../assets/panel/workshopSpring.jpg";
import workshopManagementFall2023 from "../../assets/panel/workshopManagementFall2023.jpg";
import ParticlesContainer from "./ParticlesContainer";

const terms = [
  {
    term: "2024 Fall",
    president: { name: "Maisha Tabassum", img: presidentFall2024 },
    generalSecretary: { name: "Anik Dev Argho", img: generalSecretaryFall2024 },
    clubCoordinator: {
      name: "Istiaque Ibn Zahid",
      img: clubCoordinatorFall2024,
    },
    panel: [
      {
        position: "Brand Promoter",
        name: "Puspita Khatun Papry",
        img: brandPromotorFall2024,
      },
      {
        position: "Communication",
        name: "Abdullah Al Rafi",
        img: communicationFall2024,
      },
      {
        position: "Creative Design",
        name: "Humayra Akter",
        img: creativeDesignFall2024,
      },
      {
        position: "Event Management",
        name: "Saikat Islam Sagor",
        img: eventManagementFall2024,
      },
      {
        position: "Logistics",
        name: "Redwan Ahmed Tamim",
        img: logisticFall2024,
      },
      {
        position: "Workshop Management",
        name: "Farah Ismail",
        img: workshopManagementFall2024,
      },
    ],
  },
  {
    term: "2024 Spring",
    president: { name: "Fardin Islam ahin", img: presidentSpring },
    generalSecretary: { name: "Anik Dev Argho", img: generalSecretarySpring },
    clubCoordinator: { name: "Farah Ismail", img: clubCoordinatorSpring },
    panel: [
      {
        position: "Brand Promoter",
        name: "Chaity Fariha",
        img: brandPromotorSpring,
      },
      {
        position: "Communication",
        name: "Maisha Tabassum",
        img: communicationSpring,
      },
      {
        position: "Creative Design",
        name: "Shaishab Das",
        img: creativeDesignSpring,
      },
      {
        position: "Event Management",
        name: "Istiaque Ibn Zahid",
        img: eventManagementSpring,
      },
      { position: "Logistics", name: "Hafiz ul Alam", img: logisticSpring },
      {
        position: "Workshop Management",
        name: "Saikat Islam Sagor",
        img: workshopSpring,
      },
    ],
  },
  {
    term: "2023 Fall",
    president: { name: "Shoeb Parvez Shawon", img: presidentFall2023 },
    generalSecretary: {
      name: "Md Istiaque Ahammed Sakib",
      img: generalSecretaryFall2023,
    },
    clubCoordinator: { name: "Maliha Zerin", img: clubCoordinatorFall2023 },
    panel: [
      {
        position: "Brand Promoter",
        name: "Ononya Shahjahan",
        img: brandPromotorFall2023,
      },
      {
        position: "Communication",
        name: "Tanvir Ahamed Srijan",
        img: communicationFall2023,
      },
      {
        position: "Creative Design",
        name: "Sadik Bin Ashraf",
        img: creativeDesignFall2023,
      },
      {
        position: "Event Management",
        name: "Md Soad Solaiman",
        img: eventManagementFall2023,
      },
      { position: "Logistics", name: "Mehrab Al Islam", img: logisticFall2023 },
      {
        position: "Workshop Management",
        name: "Md Mahmud Shihab Mahin",
        img: workshopManagementFall2023,
      },
    ],
  },
];

const Team = () => {
  return (
    <div>
      <ParticlesContainer />
      <h1 className="text-4xl font-extrabold text-center text-blue-900 my-12">
        Meet Our Team
      </h1>
      {terms?.map((term, index) => (
        <div
          key={index}
          className="mx-24 my-8 p-8 bg-gradient-to-tr from-slate-500 via-slate-300 to-blue-50 rounded-xl shadow-lg border border-gray-500"
        >
          {/* Term Title */}
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center border-b-4 border-blue-600 pb-2">
            {term?.term} Term Panel
          </h2>

          {/* President & General Secretary */}
          <div className="flex justify-center gap-16 mb-10">
            {[term?.president, term?.generalSecretary]?.map((person, i) => (
              <div key={i} className="text-center flex items-center flex-col">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-36 h-36 object-cover rounded-md border-4 border-blue-800 shadow-lg hover:scale-105 transition"
                />
                <p className="font-bold italic text-center text-blue-800 mt-2 text-lg">
                  {person.name}
                </p>
                <p className="text-gray-800">
                  {i === 0 ? "President" : "General Secretary"}
                </p>
              </div>
            ))}
          </div>

          {/* Club Coordinator */}
          <div className="flex items-center justify-center mb-8">
            <div className="text-center">
              <img
                src={term.clubCoordinator.img}
                alt={term.clubCoordinator.name}
                className="w-[130px] h-[130px] object-cover rounded-md border-4 border-blue-700 shadow-lg hover:scale-105 transition"
              />
              <p className="font-bold italic text-blue-700 mt-2 text-lg">
                {term.clubCoordinator.name}
              </p>
              <p className="text-gray-800">Club Coordinator</p>
            </div>
          </div>

          {/* Panel Members */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {term?.panel?.map((member, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-md border-4 border-blue-600 shadow-md hover:scale-105 transition"
                />
                <p className="font-semibold text-blue-600  italic mt-2 text-lg">
                  {member.name}
                </p>
                <p className="text-gray-800 text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
