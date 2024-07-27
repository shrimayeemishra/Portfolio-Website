import React from "react";

const ProjectCardLink = ({ img, title, techstack, link, paragraph }) => {
  return (
    <>
      <div className="projectcard bg-[#D3F4FF] rounded-2xl border-[1px] border-[#106396] flex flex-col mb-4 text-[#106396] md:w-2/5">
        <div className="bg-[#d3f4ff] border-[1px] border-[#106396] rounded-lg mx-8 my-4">
          <img src={img} className="p-2 w-1/2 mx-auto" />
        </div>
        <p className="font-bold font-serif ml-4 mt-3 text-xl ">
          Project Title: {title}
        </p>
        <p className="font-semibold font-serif ml-4 mt-1 text-base">
          Tech Stack: {techstack}
        </p>
        <p className="font-semibold font-serif ml-4 mt-1 mb-3 text-base">
          Link:{" "}
          <a href={link} className="underline underline-offset-4">
            {link}
          </a>
        </p>
        <p className="font-medium font-serif ml-4 mt-1 mb-3 text-base text-justify px-4 pl-0">
          {paragraph}
        </p>
      </div>
    </>
  );
};
export default ProjectCardLink;
