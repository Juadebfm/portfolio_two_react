import React from "react";
import "../index.css";
import { CiMenuBurger } from "react-icons/ci";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="container_pd">
      <div className="logo">
        <Link to="/" className="logo_link">
          BIELAVIN
        </Link>
      </div>
        <CiMenuBurger className="hamburger"/>

      <ul className="navList">
        <Link
          className={`link ${location.pathname === "/" && "active"}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`link ${location.pathname === "/about" && "active"}`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`link ${location.pathname === "/portfolio" && "active"}`}
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={`link ${location.pathname === "/contact" && "active"}`}
          to="/contact"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
