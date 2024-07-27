import React from "react";
import Navbar from "../Components/navbar";
import SkillsButton from "../Components/skillsbox";
import cpp from "../assets/cpp.png";
import figma from "../assets/figma.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import postgresql from "../assets/postgresql.png";
import ProjectCard from "../Components/projectcard";
import ProjectCardLink from "../Components/projectcardwithlink";
import ContactCard from "../Components/contactcard";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="mainpage bg-[#D3F4FF] h-full w-full">
        <div className="banner">
          <p className="text-9xl text-[#10719A] text-center font-mono font-bolo mb-[1%] pt-[5%]">
            Shrimayee Mishra
          </p>
          <p className="text-2xl text-[#10719A] text-end font-mono mr-8">
            a computer engineering student,
          </p>
          <p className="text-2xl text-[#10719A] text-end font-mono mr-44">
            a passionate learner
          </p>
        </div>

        <div className="about font-serif">
          <h1 className="text-5xl font-bold text-[#10719A] text-start ml-[5%] mb-[1%] pt-[5%]">
            About
          </h1>
          <p className="ml-[5%] text-xl text-pretty pr-[5%] w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            erat id ipsum molestie iaculis. Mauris quis turpis in ex egestas
            euismod. Integer porta ipsum gravida magna aliquet, sed posuere nisi
            congue. Donec vel urna lacinia, mattis nisi sit amet, aliquet ex.
            Curabitur egestas turpis felis, non pellentesque erat luctus et.
          </p>
        </div>

        <div className="education"></div>

        <div className="skills font-serif">
          <h1 className="text-5xl font-bold text-[#10719A] text-start ml-[5%] mb-[1%] pt-[5%]">
            Skills familiar with:
          </h1>
          <div>
            <div className="icongroup flex flex-row justify-around">
              <SkillsButton img={cpp} />
              <SkillsButton img={figma} />
              <SkillsButton img={html} />
              <SkillsButton img={css} />
            </div>
            <div className="icongroup flex flex-row justify-around">
              <SkillsButton img={postgresql} />
              <SkillsButton img={tailwind} />
              <SkillsButton img={react} />
              <SkillsButton img={git} />
            </div>
          </div>
        </div>

        <div className="project">
          <h1 className="text-5xl font-bold font-serif text-[#10719A] text-start ml-[5%] mb-[1%] pt-[5%]">
            Projects
          </h1>
          <div className="projecttiles flex flex-row flex-wrap justify-around">
            <ProjectCardLink
              img={figma}
              title="GBM"
              techstack="React, Tailwind"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              link="www.google.com"
            />
            <ProjectCardLink
              img={figma}
              title="GBM"
              techstack="React, Tailwind"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              link="www.google.com"
            />
            <ProjectCard
              img={figma}
              title="GBM"
              techstack="React, Tailwind"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ProjectCard
              img={figma}
              title="GBM"
              techstack="React, Tailwind"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
        </div>

        <div className="contact">
          <h1 className="text-5xl font-bold font-serif text-[#10719A] text-start ml-[5%] mb-[1%] pt-[5%]">
            Contact
          </h1>
          <ContactCard />
        </div>
      </div>
    </>
  );
};
export default MainPage;
