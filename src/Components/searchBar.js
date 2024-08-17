import React from "react";
import { Link } from "react-router-dom";
import searchicon from "../assets/searchicon.png";
import arrowicon from "../assets/arrowicon.png";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <>
      <div className="bg-white rounded-2xl w-3/5 h-6 mx-auto mt-8 mb-6 flex flex-row justify-between items-center md:w-5/12 xl:h-8">
        <div className="flex flex-row justify-start items-center">
          <img
            src={searchicon}
            className="w-4 h-4 m-1 md:w-5 md:h-5 xl:w-6 xl:h-6"
            alt="search icon"
          />
          <p className="text-xs md:text-sm xl:text-lg font-semibold text-[#3b54aa] xl:ml-2">
            Shrimayee Mishra
          </p>
        </div>
        <div className="flex items-center">
          <motion.p
            className="text-xs md:text-sm xl:text-base text-gray-500 mr-1 md:mr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click the arrow
          </motion.p>
          <Link to="/search">
            <motion.img
              src={arrowicon}
              className="w-4 h-4 m-1 md:w-5 md:h-5 xl:w-6 xl:h-6"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
              alt="arrow icon"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
