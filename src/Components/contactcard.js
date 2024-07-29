import React from "react";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import X from "../assets/X.png";
import ContactButton from "./contactbox";

const ContactCard = () => {
  return (
    <>
      <div
        className="contactcard bg-[#B9EDFF] font-poppins rounded-2xl border-[1px] border-[#106396] flex flex-col
      md:w-2/3 md:mx-auto
      lg:w-3/5
      xl:w-1/2"
      >
        <p className="text-center text-3xl font-bold my-6 md:text-5xl">
          Let's Connect
        </p>
        <p className="text-center text-base mt-2 md:text-xl md:my-1">
          Name: Shrimayee Mishra
        </p>
        <p className="text-center text-base md:text-xl md:my-1">
          Address: Mumbai, Maharashtra, India
        </p>
        <p className="text-center text-base mb-2 md:text-xl md:my-1">
          Gmail: shrimayeemishra934@gmail.com
        </p>

        <div className="contactbuttons flex flex-row justify-center">
          <a
            href="https://www.linkedin.com/in/shrimayee-mishra"
            target="_blank"
          >
            <ContactButton img={linkedin} />
          </a>
          <a href="mailto:shrimayeemishra934@gmail.com" target="_blank">
            <ContactButton img={gmail} />
          </a>
          <a href="https://x.com/Shrimayeemishra" target="_blank">
            <ContactButton img={X} />
          </a>
        </div>
      </div>
    </>
  );
};
export default ContactCard;
