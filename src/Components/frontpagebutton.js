import React from "react";

const FrontPageButton = ({ img }) => {
  return (
    <>
      <div className="bg-[#d3f4ff] border-[1px] border-[#106396] w-16 rounded-lg xl:w-1/4 md:1/2">
        <img src={img} className="w-full" />
      </div>
    </>
  );
};
export default FrontPageButton;
