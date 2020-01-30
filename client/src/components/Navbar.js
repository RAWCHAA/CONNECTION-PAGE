import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Connection from "./Connection";
import Interest from "./Interest";
import contacts from "./Contacts";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="../Profile">
        <h4>WILLIAM BUTLER</h4>
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
