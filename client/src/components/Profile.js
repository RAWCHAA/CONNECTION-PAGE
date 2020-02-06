import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import d from "../photos/3.jpg";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <main role="main">
        <div className="row">
          <div className="small-12 medium-2 large-2 columns">
            <div className="circle">
              <img className="pic profile-pic" src={d} alt="" />
            </div>
          </div>
        </div>
        <div className="contained">
          <h1> Rawchaa Ahraya</h1>
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
      <Footer />
    </div>
  );
}
