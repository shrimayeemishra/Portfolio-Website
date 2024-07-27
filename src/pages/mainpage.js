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
import banner from "../assets/banner.png";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="mainpage bg-[#D3F4FF] h-full w-full">
        <div className="banner w-full h-auto">
          <img src={banner} className="lg:mx-auto" />
        </div>

        <div id="about" className="about font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            About
          </h1>
          <p className="text-justify px-2 md:w-1/2 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            erat id ipsum molestie iaculis. Mauris quis turpis in ex egestas
            euismod. Integer porta ipsum gravida magna aliquet, sed posuere nisi
            congue. Donec vel urna lacinia, mattis nisi sit amet, aliquet ex.
            Curabitur egestas turpis felis, non pellentesque erat luctus et.
          </p>
        </div>

        <div id="education" className="education font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Education
          </h1>
        </div>

        <div id="skills" className="skills font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Skills familiar with:
          </h1>
          <div>
            <div className="icongroup flex flex-row justify-around">
              <SkillsButton img={cpp} className="" />
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

        <div id="projects" className="projects font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Projects
          </h1>
          <div className="projecttiles flex flex-row flex-wrap justify-around">
            <ProjectCardLink
              img={figma}
              title="GBM"
              techstack="React, Tailwind"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              link="www.google.com"
            />
            <ProjectCardLink
              img={figma}
              title="GBM"
              techstack="React, Tailwind"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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

        <div id="contact" className="contact font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Contact
          </h1>
          <ContactCard />
        </div>
      </div>
    </>
  );
};
export default MainPage;
