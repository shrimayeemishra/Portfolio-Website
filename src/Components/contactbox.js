import React from "react";

const ContactButton = ({ img }) => {
  return (
    <>
      <div className="bg-[#d3f4ff] border-[1px] border-[#106396] rounded-lg m-2">
        <img src={img} className="p-1 w-14 mx-auto md:w-20" />
      </div>
    </>
  );
};
export default ContactButton;
