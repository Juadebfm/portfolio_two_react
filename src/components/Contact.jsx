import React from "react";
import "../index.css";
import { FaBehance, FaFigma, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact_section container_pd">
      <span className="contact">
        <span>Contact</span> <span className="line"></span>
      </span>
      <div className="contact_details_form">
        <div className="contact_details">
          <h1>Let's Work</h1>
          <p>
            It's important to have a brand that represents you and what you
            stand for. That's why I'm committed to helping you create a website
            that truly represents you, resonates with your audience, and makes a
            real difference. Together we can create a website that inspires,
            inspires and makes an impact. Let's do that!
          </p>
          <div className="hero_icons">
            <FaFigma />
            <FaInstagram />
            <FaBehance />
          </div>
        </div>

        <form className="contact_form">
          <div className="contact_block">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="Write your name here" />
          </div>
          <div className="contact_block">
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder="Write your email here" />
          </div>
          <div className="contact_block">
            <label htmlFor="Message">Message</label>
            <textarea type="text" placeholder="Write your email here" />
          </div>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
