import React from "react";
import logo from "../assets/ShrimayeeMishraLogo.png";
import SearchBar from "../Components/searchBar";
import FrontPageButton from "../Components/frontpagebutton";
import linkedin from "../assets/linkedin.png";
import hackerrank from "../assets/hackerrank.png";
import leetcode from "../assets/leetcode.png";
import github from "../assets/github.png";
import medium from "../assets/medium.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";

const FrontPage = () => {
  return (
    <div className="homepage h-screen bg-[#D3F4FF] flex flex-col" id="homepage">
      <div
        className="mx-auto w-1/2 mt-[25%] md:mt-[10%] xl:mx-[33%] xl:mt-[7%]"
        id="logo"
      >
        <a href="#homepage">
          <img src={logo} />
        </a>
      </div>

      <div className="searchBar">
        <SearchBar />
      </div>

      <div className="socialbuttons container mx-auto p-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <a
            className="flex justify-center items-center"
            href="mailto:shrimayeemishra934@gmail.com"
            target="_blank"
          >
            <FrontPageButton img={gmail} />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://leetcode.com/u/shrimayeemishra/"
            target="_blank"
          >
            <FrontPageButton img={leetcode} />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://medium.com/@shrimayeemishra"
            target="_blank"
          >
            <FrontPageButton img={medium} />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://www.linkedin.com/in/shrimayee-mishra"
            target="_blank"
          >
            <FrontPageButton img={linkedin} />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://github.com/shrimayeemishra"
            target="_blank"
          >
            <FrontPageButton img={github} />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://www.hackerrank.com/profile/shrimayeemishra1"
            target="_blank"
          >
            <FrontPageButton img={hackerrank} />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://www.instagram.com/_artifying/"
            target="_blank"
          >
            <FrontPageButton img={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
