import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <ul className="navList">
        <Link
          className={`link ${location.pathname === "/" && "active_footer"}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`link ${location.pathname === "/about" && "active_footer"}`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`link ${location.pathname === "/portfolio" && "active_footer"}`}
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={`link ${location.pathname === "/resume" && "active_footer"}`}
          to="/resume"
        >
          Resume
        </Link>
        <Link
          className={`link ${location.pathname === "/contact" && "active_footer"}`}
          to="/contact"
        >
          Contact
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
