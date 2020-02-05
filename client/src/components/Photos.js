import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
        <h1>Moments With Rawchaa</h1>
        <div>
          <img src={a} alt="" />
        </div>
        <div>
          <img src={b} alt="" />
        </div>
        <div>
          <img src={c} alt="" />
        </div>
        <div>
          <img src={d} alt="" />
        </div>
        <div>
          <img src={e} alt="" />
        </div>
        <div>
          <img src={f} alt="" />
        </div>
        <div>
          <img src={g} alt="" />
        </div>
        <div>
          <img src={h} alt="" />
        </div>
        <div>
          <img src={i} alt="" />
        </div>
        <div>
          <img src={j} alt="" />
        </div>
        <div>
          <img src={k} alt="" />
        </div>
        <div>
          <img src={l} alt="" />
        </div>
        <div>
          <img src={m} alt="" />
        </div>
        <div>
          <img src={n} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
