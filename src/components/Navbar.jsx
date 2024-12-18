import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiReactiveresume } from "react-icons/si";

function Navbar() {
  return (
    <div>
      <nav className="mb-10 flex flex-col md:flex-row items-center justify-between py-4 md:py-6">
        {/* Logo Section */}
        <div className="flex items-center text-2xl md:text-4xl">
          <p className="w-10 mx-4 md:mx-10">
            <b className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight ms-4 md:ms-10 text-4xl">
              Portfolio
            </b>
          </p>
        </div>

        {/* Social Links Section */}
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-0 text-2xl md:text-4xl">
          <a
            href="https://www.instagram.com/vicky.kumar1106/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/vicky-kumar-3a4566284/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vickykumar11062"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://app.luminpdf.com/viewer/676074355954d26c8a8b9613"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <SiReactiveresume />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
