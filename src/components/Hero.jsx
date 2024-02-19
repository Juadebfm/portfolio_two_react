import React from "react";
import { FaFigma } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Profile from "../assets/Intersect.png";

const Hero = () => {
  return (
    <section className="hero_section container_pd">
      <div className="hero_icons">
        <FaFigma />
        <FaInstagram />
        <FaBehance />
      </div>
      <div className="hero_img_details">
        <img src={Profile} alt="My Self" />
        <span>Nikita Bielavin</span>
        <span>I am a UI/UX Designer</span>
      </div>

      <p className="vertical-text">web designer</p>
    </section>
  );
};

export default Hero;
