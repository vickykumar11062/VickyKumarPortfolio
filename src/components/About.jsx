import React from "react";
import image from "../assets/images4.png";
import { delay, motion } from "framer-motion";

const Container1 = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

function About() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="my-20 text-center text-4xl font-bold text-white"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h1>

        <div className="flex flex-wrap">
          <motion.div
            variants={Container1(0.6)}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="bg-transparent" src={image} alt="image su" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-8 max-w-xl py-6">
                Hello! I’m
                <span>
                  <b> Vicky Kumar </b>
                </span>
                , a dedicated Full-Stack Developer with a passion for building
                end-to-end web applications that solve real-world problems.{" "}
                <br /> I specialize in crafting intuitive user interfaces using
                tools like React, while ensuring robust back-end functionality
                with Node.js, Express, and MongoDB. <br /> I enjoy the creative
                process of turning ideas into functional, scalable solutions and
                have experience with responsive design, RESTful APIs, and
                database management. <br /> Beyond coding, I’m a firm believer
                in continuous learning and love exploring the latest
                technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
