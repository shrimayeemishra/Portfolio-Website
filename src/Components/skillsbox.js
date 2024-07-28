import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillsButton = ({ img, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-[#d3f4ff] border-[1px] border-[#106396] rounded-lg m-2 md:w-24 lg:w-28 xl:w-32 flex justify-center items-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={img} className="p-1" alt="Skill" />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-full ml-2 p-1 bg-[#aad0e8] border text-black border-[#106396] rounded shadow-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsButton;
