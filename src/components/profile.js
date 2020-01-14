import React from "react";

export default function Profile() {
  return(
    <div>
      <header>
      <span className="navbar h1 mb-0">PROFILE</span>
        <span className="click" onClick={update}>
          <i className="far fa-check-circle text-danger" />
        </span>
      </header>
    </div>
  );