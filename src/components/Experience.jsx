import React from "react";
import { animate, delay, motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Internship",
      company: "Zeetron Network Pvt. Ltd.",
      location: "Jaipur",
      date: "May 2024 - July 2024",
    },
    {
      title: "MERN Stack Training",
      company: "WsCube Tech",
      location: "Jaipur",
      date: "May 2023-2024",
    },
  ];

  return (
    <section id="experience" className=" py-10">
      <div className="container mx-auto px-6">
        <motion.h2 
         whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.4 ,delay:0.5}}
        className="text-3xl font-bold text-white text-center mb-8">
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl font-semibold text-white"
              >
                {exp.title}
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white"
              >
                {exp.company}
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white text-sm float-end items-center"
              >
                {exp.date}
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white"
              >
                {exp.location}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
