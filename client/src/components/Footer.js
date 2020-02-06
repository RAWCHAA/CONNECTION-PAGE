import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div className="footer">
      <Link to="/Profile">
        <h4>Rawchaa Ahraya</h4>
      </Link>
      <a href="https://www.instagram.com/da_angry_israelite/">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/Williebangbang">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com/1westRawchaa">
        <i className="fab fa-twitter-square"></i>
      </a>
      <a href="https://github.com/RAWCHAA">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/william-butler-b30094103/">
        <i className="fab fa-linkedin"></i>
      </a>
      <Link to="/">
        <i className="fas fa-door-open" />
      </Link>
    </div>
  );
}
