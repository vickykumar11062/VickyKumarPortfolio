import React from "react";
import image from "../assets/images3.png";
import { delay, motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

function Hero() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mg-35"></div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl mx-10 "
            >
              Vicky Kumar
            </motion.h1>
            <motion.span
              variants={Container(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl  tracking-tight text-transparent ms-10"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={Container(1.2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight mx-10"
            >
              I’m Vicky Kumar, a passionate fresher full-stack developer skilled
              in building user-friendly interfaces, efficient APIs, and robust
              databases using technologies like Frontend, Backend, and Database.
              With a strong commitment to learning and innovation, I’m excited
              to create impactful solutions and grow in the dynamic world of
              software development. Let’s build something amazing together!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-transparent"
              src={image}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
