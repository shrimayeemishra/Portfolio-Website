import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectCardLink = ({
  img,
  title,
  techstack,
  link1,
  link2,
  paragraph,
}) => {
  const controls = useAnimation();
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1 }}
      className="projectcard bg-[#D3F4FF] rounded-2xl border-[2px] border-[#106396] flex flex-col mb-4 text-[#106396] md:w-2/5"
    >
      <div className="bg-[#15358d] border-[1px] border-[#106396] rounded-lg mx-8 my-4">
        <img
          src={img}
          alt={`${title} thumbnail`}
          className="p-2 w-auto mx-auto"
        />
      </div>
      <p className="font-poppins font-medium text-[#000000] ml-4 mt-3 text-lg">
        <span className="font-bold font-serif text-[#106396] text-xl">
          Title:{" "}
        </span>
        {title}
      </p>
      <p className="font-poppins font-medium text-[#000000] ml-4 mt-1 text-lg">
        <span className="font-bold font-serif text-[#106396] text-xl">
          Tech Stack:{" "}
        </span>
        {techstack}
      </p>
      <div className="flex flex-col space-y-4 ml-4 mr-4 mt-3 md:flex-row md:space-y-0 md:space-x-4 md:justify-start">
        <a href={link1} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#106396] text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#0c4a73] focus:outline-none transition duration-300 ease-in-out w-full md:w-auto">
            Visit Project
          </button>
        </a>
        <a href={link2} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#106396] text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#0c4a73] focus:outline-none transition duration-300 ease-in-out w-full md:w-auto">
            View GitHub
          </button>
        </a>
      </div>
      <p className="font-medium font-poppins text-[#000000] ml-4 mt-4 mb-3 text-lg text-justify px-4 pl-0">
        {paragraph}
      </p>
    </motion.div>
  );
};

export default ProjectCardLink;
