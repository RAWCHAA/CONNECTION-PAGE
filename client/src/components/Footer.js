import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div className="footer">
      <Link to="/Profile">
        <h4>WILLIAM BUTLER</h4>
      </Link>
      <Link to="/">
        <i className="fas fa-door-open" />
      </Link>
    </div>
  );
}
