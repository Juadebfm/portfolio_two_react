import React from "react";
import "../index.css";
import Myself from "../assets/myself.png";

const AboutSection = () => {
  return (
    <section className="about_section container_pd">
      <img src={Myself} alt="Myself" />
      <div className="about_section_details">
        <span className="about">
          <span>About</span> <span className="line"></span>
        </span>
        <h2>Nikita Bielavin</h2>
        <p>
          Detail-oriented team player with strong organizational skills. Ability
          to handle multiple projects simultaneously with a high degree of
          accuracy.
        </p>
        <div className="skills_section">
          <span className="skills">
            <span>Skills</span> <span className="line"></span>
          </span>
          <ul>
            <li>Figma</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>Adobe XD</li>
            <li>Sketch</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
