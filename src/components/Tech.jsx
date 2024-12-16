import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { animate, delay, motion } from "framer-motion";

const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      easy: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Tech() {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <div>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="my-20 text-center font-bold text-4xl"
          >
            Technologies
          </motion.h1>
        </div>

        <div className="flex flex-wrap gap-10 mt-12 ">
          <motion.div
            variants={IconVariant(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-8"
          >
            <IoLogoJavascript className="text-9xl text-yellow-400 logo" />
          </motion.div>
          <motion.div
            variants={IconVariant(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-8"
          >
            <FaReact className="text-9xl text-blue-400 logo " />
          </motion.div>
          <motion.div
            variants={IconVariant(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-8"
          >
            <FaNodeJs className="text-9xl text-green-400 logo" />
          </motion.div>
          <motion.div
            variants={IconVariant(7)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-8"
          >
            <SiExpress className="text-9xl text-black-400 logo" />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-10 mt-12">
          <motion.div
            variants={IconVariant(9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-8"
          >
            <SiMongodb className="text-9xl text-green-400 logo" />
          </motion.div>
          <motion.div
            variants={IconVariant(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-8"
          >
            <FaJava className="text-9xl text-red-400 w-50 logo" />
          </motion.div>
          <motion.div
            variants={IconVariant(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-8"
          >
            <TbBrandMysql className="text-9xl text-palette-400 logo " />
          </motion.div>
          <motion.div
            variants={IconVariant(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-8"
          >
            <FaPython className="text-9xl text-yellow-400 logo " />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Tech;
