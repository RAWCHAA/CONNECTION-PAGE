import React from "react";
import Navbar from "./Navbar";
import $ from "jquery";
import { Link } from "react-router-dom";
import a from "../photos/0.jpg";
import b from "../photos/1.jpg";
import c from "../photos/2.jpg";
import d from "../photos/3.jpg";
import e from "../photos/4.jpg";
import f from "../photos/5.jpg";
import g from "../photos/6.jpg";
import h from "../photos/7.jpg";
import i from "../photos/8.jpg";
import j from "../photos/9.jpg";
import k from "../photos/10.jpg";
import l from "../photos/11.jpg";
import m from "../photos/blue.jpg";
import n from "../photos/fly.jpg";

export default function Photos() {
  return (
    <div>
      <Navbar />
      <div className="gallery">
        <div>
          <img src={a} />
        </div>
        <div>
          <img src={b} />
        </div>
        <div>
          <img src={c} />
        </div>
        <div>
          <img src={d} />
        </div>
        <div>
          <img src={e} />
        </div>
        <div>
          <img src={f} />
        </div>
        <div>
          <img src={g} />
        </div>
        <div>
          <img src={h} />
        </div>
        <div>
          <img src={i} />
        </div>
        <div>
          <img src={j} />
        </div>
        <div>
          <img src={k} />
        </div>
        <div>
          <img src={l} />
        </div>
        <div>
          <img src={m} />
        </div>
        <div>
          <img src={n} />
        </div>
      </div>
    </div>
  );
}
