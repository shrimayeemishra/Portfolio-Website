import React from "react";
import logo from "../assets/ShrimayeeMishraLogo.png";
import LongSearchBar from "../Components/longSearchBar";
import PromptBox from "../Components/promptbox";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <div className="searchpage bg-[#D3F4FF] pb-4" id="searchpage">
      <div className="firstline flex flex-row justify-start pt-8">
        <div className="logo w-1/4 md:w-1/5 lg:w-1/6 xl:w-2/12">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <LongSearchBar />
      </div>

      <div className="flex flex-col">
        <p
          className="font-bold font-serif mt-5 ml-6 text-lg text-[#106396]
          md:text-xl md:mx-auto
          lg:text-2xl lg:mx-16
          xl:mx-32"
        >
          Each link will give you more details—click to explore all !
        </p>
        <Link to="/main#about">
          <PromptBox
            p1="Who is Shrimayee Mishra?"
            p2="Shrimayee Mishra is a computer engineering student currently pursuing her bachelors of technology at SNDT."
          />
        </Link>

        <Link to="/main#education">
          <PromptBox
            p1="What is Shrimayee Mishra’s Education Qualifications?"
            p2="Shrimayee's educational journey from a Diploma in Electronics Engineering(VJTI, Mumbai) to a Bachelor’s in Computer Engineering(SNDT) has 
            equipped her with a robust foundation in both hardware and software domains. This diverse background allows to approach problems 
            with a holistic perspective, blending insights from both fields to drive innovative solutions."
          />
        </Link>

        <Link to="/main#skills">
          <PromptBox
            p1="What skills does Shrimayee Mishra possess?"
            p2="Shrimayee has strong skills in teamwork, analytical thinking, and public speaking.
            Her ability to collaborate effectively with diverse teams enhances project outcomes, 
            while her analytical thinking enables her to solve complex problems with precision.
            She is also proficient in public speaking, which allows her to present
            ideas clearly and engage with audiences confidently. Shrimayee Mishra also possesses technical skills.
            Click the link to know more."
          />
        </Link>

        <Link to="/main#projects">
          <PromptBox
            p1="What Projects did Shrimayee Mishra implement?"
            p2="Shrimayee has implemented projects across both electronics and computer engineering domains, demonstrating her ability 
            to integrate hardware and software solutions effectively."
          />
        </Link>

        <Link to="/main#contact">
          <PromptBox
            p1="How do I contact Shrimayee Mishra?"
            p2="You may contact Shrimayee by sending her an e-mail mentioned in the card or you may send her a text over her social profile."
          />
        </Link>
      </div>
    </div>
  );
};

export default SearchPage;
