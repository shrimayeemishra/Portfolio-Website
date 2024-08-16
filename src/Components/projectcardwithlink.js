import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectCardLink = ({
  img,
  title,
  link1,
  link2,
  techstack,
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
      <p className="font-medium font-poppins text-[#000000] ml-4 mt-1 text-base">
        <span className="font-bold font-serif text-[#106396] text-xl">
          Link:{" "}
        </span>
        <a href={link1} className="underline underline-offset-4">
          {link1}
        </a>
      </p>
      <p className="font-medium font-poppins text-[#000000] ml-4 mt-1 mb-3 text-base">
        <span className="font-bold font-serif text-[#106396] text-xl">
          Github:{" "}
        </span>
        <a href={link2} className="underline underline-offset-4">
          {link2}
        </a>
      </p>
      <p className="font-medium font-poppins text-[#000000] ml-4 mt-1 mb-3 text-lg text-justify px-4 pl-0">
        {paragraph}
      </p>
    </motion.div>
  );
};

export default ProjectCardLink;
