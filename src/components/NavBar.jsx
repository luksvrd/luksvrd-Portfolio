import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-around gap-x-8">
        <li>
          <ScrollLink
            to="intro"
            smooth={true}
            className="flex-1  cursor-pointer text-3xl font-bold text-white"
          >
            <h1>Intro</h1>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            smooth={true}
            className="flex-1  cursor-pointer text-3xl font-bold text-white"
          >
            <h1>Projects</h1>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            className="flex-1  cursor-pointer text-3xl font-bold text-white"
          >
            <h1>Contact Me</h1>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="resume"
            smooth={true}
            className="flex-1  cursor-pointer text-3xl font-bold text-white"
          >
            <h1>Resume</h1>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
