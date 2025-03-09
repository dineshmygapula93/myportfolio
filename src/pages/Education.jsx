import React from 'react';
import '../Staticfiles/edu.css'
const Education = () => {
  const educationDetails = [
    {
      degree: "Master of Computer Applications",
      institution: "Swarnandhra College of Engineering and Technology",
      year: "2022 - 2024"
    },
    {
      degree: "Bachelor of Science",
      institution: "Aditya Degree College",
      year: "2018 - 2021"
    },
    {
      degree: "Intermediate",
      institution: "Aditya Junior College",
      year: "2016 - 2018"
    },
    {
      degree: "Matriculation",
      institution: "Abhyas The Global School",
      year: "2015 - 2016"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 h-full border-l-2 border-green-500"></div>
        {educationDetails.map((edu, index) => (
          <div
            className={`mb-8 flex items-center relative transition-transform duration-500 ease-in-out transform hover:scale-105`}
            key={index}
          >
            <div className="w-5 h-5 bg-green-500 rounded-full border-2 border-white absolute -left-3 z-10 transition-transform duration-500 ease-in-out transform hover:scale-125"></div>
            <div className="ml-4 opacity-0 transition-opacity duration-500 ease-in-out delay-200 animate-fadeIn">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <span className="text-gray-500">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;