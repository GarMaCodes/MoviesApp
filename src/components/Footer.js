import React from "react";
import tmdb from "../images/tmdb.svg";
import "../css/Footer.css";

const Footer = ({ owner }) => {
  return (
    <div className="footer">
      <p>&copy;{owner}</p>
      <div
        className="tmdbLogo"
        style={{ backgroundImage: `url(${tmdb})` }}
      ></div>
    </div>
  );
};

export default Footer;
