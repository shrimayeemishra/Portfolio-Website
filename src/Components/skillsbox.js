import React from "react";

const SkillsButton = ({ img }) => {
  return (
    <>
      <div className="bg-[#d3f4ff] border-[1px] border-[#106396] rounded-lg m-2 md:w-24 lg:w-28 xl:w-32">
        <img src={img} className="p-1" />
      </div>
    </>
  );
};
export default SkillsButton;
