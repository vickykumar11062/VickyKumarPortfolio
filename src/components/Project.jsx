import React from "react";
import { delay, motion } from "framer-motion";

const projects = [
  {
    title: "Airbnb Website",
    technologies: ["React", "Tailwind CSS", "Node.js,MongoDb"],
    description:
      "Developed a full-stack Airbnb clone with features including property listings, user authentication, booking functionality, and interactive maps, utilizing React, Tailwind CSS, and Firebase for seamless user experience and scalability.",
  },
  {
    title: "E-Commerce Website",
    technologies: ["React", "Tailwind CSS", "Stripe API", "Node.js", "MongoDb"],
    description:
      "An e-commerce application with real-time payment integration and dynamic product listings.",
  },
  {
    title: "Weather App",
    technologies: ["React", "OpenWeather API", "CSS"],
    description:
      "A weather forecasting app providing real-time updates and location-based weather details.",
  },

  {
    title: "Netflix Clone(UI)",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    description:
      "Built a Netflix clone featuring a responsive UI, user authentication, and streaming functionality, using React, Tailwind CSS, and TMDB API for dynamic content fetching.",
  },
  {
    title: "E-Commerce Website",
    technologies: ["React", "Tailwind CSS", "Stripe API", "Node.js", "MongoDb"],
    description:
      "An e-commerce application with real-time payment integration and dynamic product listings.",
  },
  {
    title: "Spotify Clone(UI)",
    technologies: ["HTML", "CSS"],
    description:
      "Created a Spotify clone with a sleek UI, user authentication, playlist management, and real-time music playback using React, Tailwind CSS, and Spotify API integration.",
  },
];

const Project = () => {
  return (
    <section id="projects" className=" py-12 px-6">
      <div className="container mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-cyan-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <motion.h3
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                {project.title}
              </motion.h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    key={idx}
                    className=" text-blue-600 text-sm font-medium py-1 px-3 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-gray-600"
              >
                {project.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
