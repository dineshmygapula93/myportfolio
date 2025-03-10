// src/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Flipkart Replica',
    description: 'This project is designed to showcase the components section in Flipkart.',
    link: 'https://flipkart-pro.vercel.app/',
    category: 'My Projects',
    image: 'flipkart-replica.png', // Replace with your image URL
  },
  {
    title: 'Weather-app',
    description: 'This is a project mainly built to learn the use of APIs in react.',
    link: 'https://weatherapp93.vercel.app/',
    category: 'My Projects',
    image: 'weather-app.png', // Replace with your image URL
  },
  {
    title: 'Driver Drowsiness Detection',
    description: 'Driver Drowsiness Monitoring using Convolutional Neural Networks',
    link: null,
    category: 'Academic',
    image: 'drver.png', // Replace with your image URL
  },
  {
    title: 'Cab Booking system',
    description: 'This project is built to maintain the drivers and user information in the database..',
    link: null,
    category: 'Academic',
    image: 'cab.png', // Replace with your image URL
  },
];

const Projects = () => {
  // Separate projects into categories
  const myProjects = projects.filter(project => project.category === 'My Projects');
  const academicProjects = projects.filter(project => project.category === 'Academic');

  return (
    <section className="py-10 bg-gray-100" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        {/* My Projects */}
        <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10"> {/* Decreased gap between cards */}
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-56 h-72 flex flex-col transform transition-transform duration-300 hover:scale-105" // Decreased width
            >
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover p-1" /> {/* Added padding around the image */}
              <div className="flex flex-col justify-between p-2 h-full">
                <div>
                  <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                  <p className="text-gray-700 mb-1 text-sm line-clamp-3">{project.description}</p> {/* Truncate text */}
                </div>
                <div className="mt-1"> {/* Reduced margin to push link closer to description */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">No link available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Projects */}
        <h3 className="text-2xl font-semibold mb-4">Academic Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-"> {/* Decreased gap between cards */}
          {academicProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-56 h-72 flex flex-col transform transition-transform duration-300 hover:scale-105" // Decreased width
            >
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover p-1" /> {/* Added padding around the image */}
              <div className="flex flex-col justify-between p-2 h-full">
                <div>
                  <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                  <p className="text-gray-700 mb-1 text-sm line-clamp-3">{project.description}</p> {/* Truncate text */}
                </div>
                <div className="mt-1"> {/* Reduced margin to push link closer to description */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">No link available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;