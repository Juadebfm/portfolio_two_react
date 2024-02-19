import React, { useState } from "react";
import { Link } from "react-router-dom";
import Portfolio1 from "../assets/nikeplus.png";
import Portfolio2 from "../assets/portfolio1.png";
import Portfolio3 from "../assets/portfolio2.png";
import Portfolio4 from "../assets/portfolio3.png";
import Portfolio5 from "../assets/portfolio4.png";
import Portfolio6 from "../assets/portfolio6.png";
import Portfolio7 from "../assets/portfolio7.png";
import Portfolio8 from "../assets/portfolio8.png";
import "../index.css"; // Import your CSS file

const Portfolio = () => {
  const [activeButton, setActiveButton] = useState("all");

  const portfolioItems = [
    { image: Portfolio1, category: "all" },
    { image: Portfolio2, category: "all" },
    { image: Portfolio3, category: "uiux" },
    { image: Portfolio4, category: "uiux" },
    { image: Portfolio5, category: "graphic" },
    { image: Portfolio6, category: "graphic" },
    { image: Portfolio7, category: "all" },
    { image: Portfolio8, category: "all" },
  ];

  const getImagesByCategory = (category) => {
    return category === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === category);
  };

  const getPaginationCircles = () => {
    const groups = ["all", "uiux", "graphic"];
    return groups.map((group) => ({ group }));
  };

  return (
    <section className="portfolio_section container_pd">
      <span className="portfolio">
        <span>Portfolio</span> <span className="line"></span>
      </span>
      <div className="btns">
        <button
          className={activeButton === "all" ? "active" : ""}
          onClick={() => setActiveButton("all")}
        >
          ALL
        </button>
        <button
          className={activeButton === "uiux" ? "active" : ""}
          onClick={() => setActiveButton("uiux")}
        >
          UI/UX
        </button>
        <button
          className={activeButton === "graphic" ? "active" : ""}
          onClick={() => setActiveButton("graphic")}
        >
          GRAPHIC DESIGN
        </button>
      </div>
      <div className="portfolio_grid">
        {getImagesByCategory(activeButton).map((portfolioItem, index) => (
          <Link to="/" key={index}>
            <img src={portfolioItem.image} alt={`portfolio-${index}`} />
          </Link>
        ))}
      </div>
      <div className="pagination">
        {getPaginationCircles().map((circle, index) => (
          <div
            key={index}
            className={`pagination-circle ${
              activeButton === circle.group ? "active" : ""
            }`}
            onClick={() => setActiveButton(circle.group)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
