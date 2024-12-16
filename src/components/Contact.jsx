import React from "react";
import { delay, motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className=" py-12 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className=" mb-8"
        >
          Feel free to reach out to me via the following contact details.
        </motion.p>
        <div className="flex flex-col gap-6 text-white">
          <div className="flex items-center justify-center">
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className=" text-xl font-medium w-28"
            >
              Address:
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-white"
            >
              123 Main Street, City, Country
            </motion.p>
          </div>
          <div className="flex items-center justify-center">
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-white text-xl font-medium w-28"
            >
              Phone:
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-gray-400"
            >
              +1 234 567 890
            </motion.p>
          </div>
          <div className="flex items-center justify-center">
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-white text-xl font-medium w-28"
            >
              Email:
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-white-200"
            >
              your.email@example.com
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
