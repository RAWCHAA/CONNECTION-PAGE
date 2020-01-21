import React from "react";
import Profile from "./Profile";
import Connection from "./Connection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container rain">
      <h1>THE WORLD'S LAST HOPE.</h1>
      <div className="choice">
        <div className="box-2">
          <div className="btn btn-two">
            <Link to="/Profile">ENTER</Link>
          </div>
        </div>
        <div className="box-2">
          <div className="btn btn-two">
            <Link to="/Connection">CONNECT</Link>
          </div>
        </div>
      </div>
      <p className="open">
        This is a information page so you can get to know the man behind the
        smile.
      </p>
    </div>
  );
}
