import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Interest() {
  return (
    <div>
      <Navbar />
      <div className="socials">
        <a
          data-width="600"
          data-height="600"
          class="twitter-timeline"
          href="https://twitter.com/1westRawchaa?ref_src=twsrc%5Etfw"
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PL0Xi2iurhf3Zv-0_vpfqdXtbrxAwBiEPO"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F1WESTBOSTON%2F&tabs=timeline&width=600&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
          height="600"
          width="600"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </div>
      <Footer />
    </div>
  );
}
