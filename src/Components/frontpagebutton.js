import React from "react";
import { motion } from "framer-motion";

const FrontPageButton = ({ img }) => {
  return (
    <>
      <motion.div
        className="bg-[#d3f4ff] border-[1px] border-[#106396] w-16 rounded-lg xl:w-1/4 md:1/2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={img} className="w-full" />
      </motion.div>
    </>
  );
};
export default FrontPageButton;
