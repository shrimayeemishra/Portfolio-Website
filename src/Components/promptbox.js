import React from "react";

const PromptBox = ({ p1, p2 }) => {
  return (
    <>
      <div
        className="promptbox bg-[#D3F4FF] rounded-2xl border-[1px] border-[#106396] flex flex-col mx-5 mt-6
      lg:w-4/5 xl:w-3/5 xl:mx-12"
      >
        <ps
          className="font-bold font-serif ml-4 mt-3 text-base text-[#106396] hover:text-[#1b8ee4]
          md:text-lg
          lg:text-xl"
        >
          {p1}
        </ps>

        <p
          className="font-medium font-serif ml-4 mt-1 mb-3 mr-2 text-base text-[#106396]
          md:text-lg
          lg:text-xl"
        >
          {p2}
        </p>
      </div>
    </>
  );
};
export default PromptBox;
