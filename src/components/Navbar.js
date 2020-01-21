import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Connection from "./Connection";
import Interest from "./Interest";
import Messages from "./Messages";

export default function navbar() {
  return (
    <div class="navbar">
      <h4></h4>
      <Link to="../Photos">
        <i class="fas fa-photo-video" />
      </Link>
      <Link to="../Interest">
        <i class="far fa-lightbulb" />
      </Link>
      <Link to="../Friends">
        <i class="fas fa-users" />
      </Link>
      <Link to="../Messages">
        <i class="fas fa-envelope" />
      </Link>
    </div>
  );
}
