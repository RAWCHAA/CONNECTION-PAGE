import React, { useEffect } from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import fly from "../fly.jpg";
import Connection from "./Connection";
import Interest from "./Interest";
import Messages from "./Messages";

export default function Profile() {
  useEffect(() => {
    scroll();
  }, []);

  function scroll() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      $(".zoom-me img").css({
        width: 100 + scroll / 5 + "%",
        top: -(scroll / 40) + "%",
        "-webkit-filter": "blur(" + scroll / 200 + "px)",
        filter: "blur(" + scroll / 50 + "px)"
      });
    });
  }

  return (
    <div>
      {/* <header className="zoom-me">
        <img src={fly} />
      </header> */}
      <Navbar />
      <main role="main">
        <div className="contained">
          <h1>WILLIAM BUTLER</h1>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <h2 className="hammer">Personal Information</h2>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <h2 className="hammer">Childhood</h2>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <h2 className="hammer">Adulthood</h2>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <h2 class="hammer">Death</h2>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
        </div>
      </main>
    </div>
  );
}
