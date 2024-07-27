import React, { useState } from "react";
import logo from "../assets/ShrimayeeMishraLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="searchpage bg-[#D3F4FF] h-full flex flex-col justify-start p-4">
      <div className="firstline flex items-center justify-between">
        <div className="w-1/4 md:w-1/12">
          <Link to="/">
            <img src={logo} alt="Shrimayee Mishra Logo" className="mx-auto" />
          </Link>
        </div>

        <button
          className="block md:hidden text-[#106396] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div
          className={`w-full mt-4 flex-col md:flex md:flex-row md:w-auto md:mt-0 justify-evenly font-serif text-[#106396] font-semibold text-lg space-y-2 md:space-y-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a className="p-2" href="#about">
            About
          </a>
          <a className="p-2" href="#education">
            Education
          </a>
          <a className="p-2" href="#skills">
            Skills
          </a>
          <a className="p-2" href="#projects">
            Projects
          </a>
          <a
            className="p-2"
            href="https://drive.google.com/file/d/1mcZfHWJphx9WzVFrYvspSRl3mboMEMih/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
          <a className="p-2" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
