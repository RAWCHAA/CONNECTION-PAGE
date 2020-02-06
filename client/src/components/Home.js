import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div id="container-anim">
        <div id="flip">
          <div>
            <div>Rawchaa Ahraya</div>
          </div>
          <div>
            <div>Officer of 500</div>
          </div>
          <div>
            <div>Priest Of The I.S.U.P.K.</div>
          </div>
        </div>
      </div>
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
      <p className="open">The Lion's Spirit Lives</p>
    </div>
  );
}
