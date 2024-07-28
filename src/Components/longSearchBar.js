import React from "react";
import searchicon from "../assets/searchicon.png";
import arrowicon from "../assets/arrowicon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LongSearchBar = () => {
  return (
    <>
      <div
        className="bg-white rounded-2xl w-3/5 h-6 mt-1 mx-auto mb-6 flex flex-row justify-between items-center 
      s:mt-2 
      md:mt-4 md:h-8 md:mx-0 md:ml-4
      lg:mt-5 lg:w-1/2 lg:ml-10
      xl:w-2/5 xl:mt-8 xl:h-9"
      >
        <div className="flex flex-row justify-start items-center">
          <img src={searchicon} className="w-4 h-4 m-1 xl:w-6 xl:h-6" />
          <p className="text-sm font-semibold md:text-base xl:text-xl xl:ml-2 lg:text-lg text-[#3b54aa]">
            Shrimayee Mishra
          </p>
        </div>
        <Link to="/main">
          <motion.img
            src={arrowicon}
            className="w-4 h-4 m-1 xl:w-6 xl:h-6"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        </Link>
      </div>
    </>
  );
};
export default LongSearchBar;
