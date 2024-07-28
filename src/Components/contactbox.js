import React from "react";
import { motion } from "framer-motion";

const ContactButton = ({ img }) => {
  return (
    <>
      <motion.div
        className="bg-[#d3f4ff] border-[1px] border-[#106396] rounded-lg m-2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={img} className="p-1 w-14 mx-auto md:w-20" />
      </motion.div>
    </>
  );
};
export default ContactButton;
