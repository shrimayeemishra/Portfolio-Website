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
import portfolioproject from "../assets/portfolioproject.png";
import Shrimayee from "../assets/Shrimayee.jpg";
import education from "../assets/education.png";
import solartracker from "../assets/solartrackingsystem.png";
import gardeningsystem from "../assets/smartgardeningsystem.png";
import servicehub from "../assets/servicehub.png";

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
          <div className="aboutparaandimage font-poppins flex flex-col md:flex-row">
            <div className="aboutparagraph md:w-1/2">
              <p className="text-justify px-2 py-2 md:text-xl">
                Hi there! I'm Shrimayee, a Computer Engineering student at SNDT
                with a zest for creativity. When I'm not immersed in tech
                projects, you can find me exploring my artistic side in various
                ways, including painting, crocheting, and writing write-ups. I
                also have a deep passion for music—whether I'm playing the piano
                or singing, I'm always up for a jamming session.
              </p>
              <p className="text-justify px-2 py-2 md:text-xl">
                In addition to my hobbies, I volunteer with Art of Living, where
                I've had the fulfilling opportunity to contribute to various
                social projects. This experience has been a significant part of
                my personal growth, helping my personality truly blossom.
              </p>
              <p className="text-justify px-2 py-2 md:text-xl">
                I’d love to connect and share my passions with you. Feel free to
                drop me a text to chat about creative pursuits, dive into
                technical discussions, or engage in some intellectual
                conversations!
              </p>
            </div>
            <div className="aboutimage md:w-2/5 md:my-auto md:mx-auto lg:w-3/5">
              <img src={Shrimayee} />
            </div>
          </div>
        </section>

        <section id="education" className="education font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Education
          </h1>
          <img src={education} className="lg:mx-auto" />
        </section>

        <section id="skills" className="skills font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Technical skills familiar with:
          </h1>
          <div>
            <div className="icongroup flex flex-row justify-around">
              <SkillsButton img={cpp} label="C++" />
              <SkillsButton img={figma} label="Figma" />
              <SkillsButton img={html} label="HTML" />
              <SkillsButton img={css} label="CSS" />
            </div>
            <div className="icongroup flex flex-row justify-around">
              <SkillsButton img={postgresql} label="SQL" />
              <SkillsButton img={tailwind} label="TailwindCSS" />
              <SkillsButton img={react} label="ReactJS" />
              <SkillsButton img={git} label="Git" />
            </div>
          </div>
        </section>

        <section id="projects" className="projects font-serif ml-6 mr-4">
          <h1 className="font-bold text-3xl my-6 text-[#10719A] text-center md:ml-2 md:text-start md:text-4xl">
            Projects
          </h1>
          <div className="projecttiles flex flex-row flex-wrap justify-around">
            <ProjectCardLink
              img={portfolioproject}
              title="Portfolio Website"
              techstack="ReactJS, TailwindCSS, Figma"
              paragraph="My portfolio website features interactive elements, and it reflects my technical skills and design capabilities. 
              Throughout the development, I focused on creating a consistent design, optimizing performance, 
              and ensuring responsive design, which significantly enhanced my front-end development and UI/UX design skills."
              link="www.google.com"
            />
            <ProjectCardLink
              img={servicehub}
              title="Chakde Chores (Academic Minor Project)"
              techstack="MERN stack, Figma"
              paragraph="Chakde Chores is a user-friendly website designed to simplify finding help for household chores. 
              The platform connects users with a range of helpers for both long-term and short-term needs, 
              making it easier to manage and delegate tasks around the house. With a focus on a seamless and intuitive interface, 
              Chakde Chores enhances convenience and reliability in managing household responsibilities.
              I worked closely with my teammates on developing the frontend, ensuring an engaging and efficient user experience."
              link="www.google.com"
            />
            <ProjectCard
              img={solartracker}
              title="Solar Tracking System (Academic Major Project)"
              techstack="Arduino, Servo motor, Light dependent resistor"
              paragraph="Solar tracking system that dynamically adjusts
              the orientation of a solar panel to align with the sun’s most direct angle.
              This system enhances solar energy efficiency by continuously positioning the panel towards
              the optimal sunlight exposure, thereby maximizing energy capture and overall performance."
            />
            <ProjectCard
              img={gardeningsystem}
              title="Smart Gardening System (Academic Major Project)"
              techstack="IoT, Blynk, NodeMCU"
              paragraph="Smart Gardening System is an IoT-based system that offers
              real-time data on environmental conditions like soil moisture and temperature. The system features app
              interaction and notifications, allowing users to operate the system and receive immediate alerts
              about critical changes in plant growth. This setup ensures users stay informed and can take
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
