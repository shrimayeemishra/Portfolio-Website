import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <div className="mainpage bg-[#D3F4FF] h-full w-full">
        <div className="banner w-full h-auto">
          <img src={banner} className="lg:mx-auto" />
        </div>

        <section id="about" className="about font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            About
          </h1>
          <p className="text-justify px-2 py-2 md:w-1/2 md:text-xl">
            Hi there! I'm Shrimayee, a Computer Engineering student at SNDT with
            a zest for creativity. When I'm not immersed in tech projects, you
            can find me exploring my artistic side in various ways, including
            painting, crocheting, and writing write-ups. I also have a deep
            passion for music—whether I'm playing the piano or singing, I'm
            always up for a jamming session.
          </p>
          <p className="text-justify px-2 py-2 md:w-1/2 md:text-xl">
            In addition to my hobbies, I volunteer with Art of Living, where
            I've had the fulfilling opportunity to contribute to various social
            projects. This experience has been a significant part of my personal
            growth, helping my personality truly blossom.
          </p>
          <p className="text-justify px-2 py-2 md:w-1/2 md:text-xl">
            I’d love to connect and share my passions with you. Feel free to
            drop me a text to chat about creative pursuits, dive into technical
            discussions, or engage in some intellectual conversations!
          </p>
        </section>

        <section id="education" className="education font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Education
          </h1>
        </section>

        <section id="skills" className="skills font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
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
        </section>

        <section id="projects" className="projects font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Projects
          </h1>
          <div className="projecttiles flex flex-row flex-wrap justify-around">
            <ProjectCardLink
              img={figma}
              title="Portfolio Website"
              techstack="ReactJS, TailwindCSS, Figma"
              paragraph="My portfolio website features interactive elements, and it reflects my technical skills and design capabilities. 
              Throughout the development, I focused on creating a consistent design, optimizing performance, 
              and ensuring responsive design, which significantly enhanced my front-end development and UI/UX design skills."
              link="www.google.com"
            />
            <ProjectCardLink
              img={figma}
              title="Chakde Chores(Academic Minor Project)"
              techstack="MongoDB, ExpressJS, ReactJS, NextJS, TailwindCSS, Figma"
              paragraph="Chakde Chores is a user-friendly website designed to simplify finding help for household chores. 
              The platform connects users with a range of helpers for both long-term and short-term needs, 
              making it easier to manage and delegate tasks around the house. With a focus on a seamless and intuitive interface, 
              Chakde Chores enhances convenience and reliability in managing household responsibilities.
              I worked closely with my teammates on developing the frontend, ensuring an engaging and efficient user experience."
              link="www.google.com"
            />
            <ProjectCard
              img={figma}
              title="Single Axis Solar Tracking System"
              techstack="Arduino, Servo motor, Light dependent resistor"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            />
            <ProjectCard
              img={figma}
              title="Plant Monitoring System"
              techstack="IoT, Blynk, NodeMCU"
              paragraph="Plant monitoring system developed an IoT-based plant monitoring system that offers
              real-time data on environmental conditions like soil moisture and temperature. The system features app
              interaction and notifications, allowing users to operate the system and receive immediate alerts
              about critical changes in plant growth.This setup ensures users stay informed and can take
              timely action to maintain optimal plant health."
            />
          </div>
        </section>

        <section id="contact" className="contact font-serif ml-6 mr-4 pb-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Contact
          </h1>
          <ContactCard />
        </section>
      </div>
    </>
  );
};
export default MainPage;
