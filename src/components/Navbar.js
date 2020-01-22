import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Connection from "./Connection";
import Interest from "./Interest";
import Messages from "./Messages";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="../Profile">
        <h4>WILLIAM BUTLER</h4>
      </Link>
      <Link to="../Photos">
        <i className="fas fa-photo-video" />
      </Link>
      <Link to="../Interest">
        <i className="far fa-lightbulb" />
      </Link>
      <Link to="../Friends">
        <i className="fas fa-users" />
      </Link>
      <Link to="../Messages">
        <i className="fas fa-envelope" />
      </Link>
    </div>
  );
}
