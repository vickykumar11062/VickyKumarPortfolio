import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiReactiveresume } from "react-icons/si";

function Navbar() {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-4xl">
          <p className=" mx-10 w-10">
            <b className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl  tracking-tight text-transparent ms-10">
              Portfolio{" "}
            </b>
          </p>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-4xl">
          <a
            href="https://www.instagram.com/vicky.kumar1106/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/vicky-kumar-3a4566284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vickykumar11062"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://app.luminpdf.com/viewer/676074355954d26c8a8b9613"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiReactiveresume />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
