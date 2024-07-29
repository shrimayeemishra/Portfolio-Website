import React, { useState } from "react";
import logo from "../assets/ShrimayeeMishraLogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="searchpage bg-[#D3F4FF] font-poppins h-full flex flex-col justify-start p-4">
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
          className={`w-full mt-4 flex-col md:flex md:flex-row md:w-auto md:mt-0 justify-evenly text-[#106396] font-semibold text-lg space-y-2 md:space-y-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <motion.a
            className="p-2"
            href="#about"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About
          </motion.a>
          <motion.a
            className="p-2"
            href="#education"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Education
          </motion.a>
          <motion.a
            className="p-2"
            href="#skills"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills
          </motion.a>
          <motion.a
            className="p-2"
            href="#projects"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Projects
          </motion.a>
          <motion.a
            className="p-2"
            href="https://drive.google.com/file/d/1WP59Fdt8dzyDB86GsvNTGwDEUi8Roy9y/view?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Resume
          </motion.a>
          <motion.a
            className="p-2"
            href="#contact"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
