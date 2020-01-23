import React from "react";
import Navbar from "./Navbar";

export default function Interest() {
  return (
    <div>
      <Navbar />
      <div className="split">
        <a
          className="twitter-timeline"
          href="https://twitter.com/1westRawchaa?ref_src=twsrc%5Etfw"
        >
          Tweets by 1westRawchaa
        </a>{" "}
      </div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F1WESTBOSTON%2F&tabs=timeline&width=400&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="500"
        height="500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
