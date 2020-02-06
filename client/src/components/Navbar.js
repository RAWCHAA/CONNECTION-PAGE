import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="../Profile">
        <h4>Rawchaa Ahraya</h4>
      </Link>
      <Link to="../Photos">
        <i className="far fa-images"></i>
      </Link>
      <Link to="../Interest">
        <i className="far fa-lightbulb" />
      </Link>
      <Link to="../Contacts">
        <i className="far fa-address-book"></i>
      </Link>
      <Link to="../connection">
        <i className="fas fa-link"></i>
      </Link>
    </div>
  );
}
